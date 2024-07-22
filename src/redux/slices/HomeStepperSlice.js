import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeIndex : 0,
    done: {
        1 : false,
        2 : false,
        3 : false,
        4 : false
    }
}
const HomeStepperSlice = createSlice({
    name : "HomeStepper",
    initialState,
    reducers: {
        setActiveIndex : (state, action) => {
            state.activeIndex = action.payload;
        },
        updateCardStatusToDone : (state, action) => {
            state.done[action.payload] = true
        }
    }
});

export const {
    setActiveIndex,
    updateCardStatusToDone
} = HomeStepperSlice.actions;

export default HomeStepperSlice.reducer