import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CryptoAssetsAPIResponse, CryptoDataAPIResponse} from "../vite-env";

export const apiCryptoSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: location.href}),
    tagTypes: ['CryptoData', 'CryptoAssets'],
    refetchOnReconnect:true,

    endpoints: builder => ({
        getCryptoData: builder.query<CryptoDataAPIResponse, any>({
            query: () => '/cryptoData.json',
            
            providesTags: ['CryptoData'],


        }),



        getCryptoAssets: builder.query<CryptoAssetsAPIResponse, any>({
            query: () => '/cryptoAssets.json',
            providesTags: ['CryptoAssets']
        }),


    })
})


export const {useGetCryptoDataQuery, useGetCryptoAssetsQuery} = apiCryptoSlice;


