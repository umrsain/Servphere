import { configureStore } from "@reduxjs/toolkit";
import thumbnailSlice from "./slices/thumbnailSlice";
import digitalSlice from "./slices/digitalSlice";
import HomeStepperSlice from "./slices/HomeStepperSlice";


export const store = configureStore({
    reducer : {
        thumbnail: thumbnailSlice,
        digital: digitalSlice,
        HomeStepper: HomeStepperSlice
    }
})

