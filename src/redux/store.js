import { configureStore } from "@reduxjs/toolkit";
import thumbnailSlice from "./slices/thumbnailSlice";
import digitalSlice from "./slices/digitalSlice";
import HomeStepperSlice from "./slices/HomeStepperSlice";
import StoreIdSlice from "./slices/StoreIdSlice";


export const store = configureStore({
    reducer : {
        thumbnail: thumbnailSlice,
        digital: digitalSlice,
        HomeStepper: HomeStepperSlice,
        StoreId : StoreIdSlice
    }
})

