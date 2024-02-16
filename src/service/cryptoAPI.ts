import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CryptoAssetsAPIResponse, CryptoDataAPIResponse} from "../vite-env";

export const apiCryptoSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://e35af59e-1c8f-4f01-b058-08905afe595b-00-3tjmmcb5lzqo9.worf.replit.dev/'}),
    tagTypes: ['CryptoData', 'CryptoAssets'],
    endpoints: builder => ({
        getCryptoData: builder.query<CryptoDataAPIResponse, any>({
            query: () => '/api/cryptoData.php',
            providesTags: ['CryptoData']
        }),

        getCryptoAssets: builder.query<CryptoAssetsAPIResponse, any>({
            query: () => '/api/cryptoAssets.php',
            providesTags: ['CryptoAssets']
        }),


    })
})


export const {useGetCryptoDataQuery, useGetCryptoAssetsQuery} = apiCryptoSlice;


