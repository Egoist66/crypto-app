/// <reference types="vite/client" />
export interface CryptoDataAPIResponse {
    result: Result[]
    meta: Meta
}

export interface Result {
    id: string
    icon: string
    name: string
    symbol: string
    rank: number
    price: number
    priceBtc: number
    volume: number
    marketCap: number
    availableSupply: number
    totalSupply: number
    priceChange1h: number
    priceChange1d: number
    priceChange1w: number
    redditUrl: string
    websiteUrl: string
    twitterUrl: string
    explorers: string[]
    contractAddress?: string
    decimals?: number
}

export interface Meta {
    page: number
    limit: number
    itemCount: number
    pageCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export type CryptoAssetsAPIResponse = Root2[]

export interface Root2 {
    id: string
    amount: number
    price: number
    date: string
}

