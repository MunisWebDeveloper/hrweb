import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      // ← Accept qolsin, lekin Content-Type YO'Q
      // FormData bo'lganda browser o'zi "multipart/form-data" qo'yadi
      headers.set("Accept", "application/json");
      return headers;
    },
  
  }),



  endpoints: (builder) => ({
    postUsers: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/cv/",
        method: "POST",
        // ❌ "Content-Type": "application/json" — O'CHIRING!
        // FormData bilan bu header bo'lsa backend o'qiy olmaydi
        body: formData,
      }),
      
    }),
    getRegions: builder.query({
      query: () => ({
        url: `/api/v1/locations/regions`,
        method: "GET",
      }),
    }),
    getLavozim: builder.query({
      query: () => ({
        url: `/api/v1/cv-lavozimlar/?skip=0&limit=100`,
        method: "GET",
      }),
    }),
     getFilialls: builder.query({
      query: () => ({
        url: `/api/v1/filiallar/?skip=0&limit=100`,
        method: "GET",
      }),
    }),
    getSkills: builder.query({
      query: (streetId) => ({
        // url: `/api/v1/locations/regions/${streetId}`,
        url: `/api/v1/skills-ref/?skip=0&limit=100`,
        method: "GET",
        
      }),
    }),
    
    getStreet: builder.query({
      query: (streetId) => ({
        // url: `/api/v1/locations/regions/${streetId}`,
        url: `/api/v1/locations/regions/${streetId}/districts`,
        method: "GET",
        
      }),
    }),
    
  }),
});

export const { usePostUsersMutation,useGetRegionsQuery,useGetStreetQuery,useGetLavozimQuery,useGetFiliallsQuery,useGetSkillsQuery} = userApi;