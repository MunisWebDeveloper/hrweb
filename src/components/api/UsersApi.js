import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://172.10.10.136:8011",

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
  }),
});

export const { usePostUsersMutation } = userApi;