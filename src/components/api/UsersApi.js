import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    prepareHeaders: (headers) => {
      // 🔐 TOKEN
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // 📱 TELEGRAM INIT DATA (ENG MUHIM)
      const telegram = window?.Telegram?.WebApp;
      const initData = telegram?.initData;

      if (initData) {
        headers.set("X-Telegram-Init-Data", initData);
      }

      // 📦 Accept
      headers.set("Accept", "application/json");

      return headers;
    },
  }),

  endpoints: (builder) => ({
    
    // 🔥 CREATE USER (FORMDATA)
    postUsers: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/cv/",
        method: "POST",
        body: formData, // ❗ Content-Type qo‘ymaymiz
      }),
    }),

    // 🌍 REGIONS
    getRegions: builder.query({
      query: () => ({
        url: `/api/v1/locations/regions`,
        method: "GET",
      }),
    }),

    // 🧑‍💼 LAVOZIM
    getLavozim: builder.query({
      query: () => ({
        url: `/api/v1/cv-lavozimlar/?skip=0&limit=100`,
        method: "GET",
      }),
    }),

    // 🏢 FILIALLAR
    getFilialls: builder.query({
      query: () => ({
        url: `/api/v1/filiallar/?skip=0&limit=100`,
        method: "GET",
      }),
    }),

    // 🧠 SKILLS
    getSkills: builder.query({
      query: () => ({
        url: `/api/v1/skills-ref/?skip=0&limit=100`,
        method: "GET",
      }),
    }),

    // 📍 DISTRICTS
    getStreet: builder.query({
      query: (regionId) => ({
        url: `/api/v1/locations/regions/${regionId}/districts`,
        method: "GET",
      }),
    }),
  }),
});

// hooks
export const {
  usePostUsersMutation,
  useGetRegionsQuery,
  useGetStreetQuery,
  useGetLavozimQuery,
  useGetFiliallsQuery,
  useGetSkillsQuery,
} = userApi;