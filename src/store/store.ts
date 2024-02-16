import {configureStore} from "@reduxjs/toolkit";
import {apiCryptoSlice} from "../service/cryptoAPI.ts";

export const store = configureStore({
    reducer: {
        [apiCryptoSlice.reducerPath]: apiCryptoSlice.reducer
    },
    middleware: (gdm) => gdm().concat(apiCryptoSlice.middleware)
})