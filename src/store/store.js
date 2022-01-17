import { configureStore } from "@reduxjs/toolkit";
import levelSlice from "./levelSlice";


const store = configureStore({
    reducer: {
        levels: levelSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // }),
})

export default store