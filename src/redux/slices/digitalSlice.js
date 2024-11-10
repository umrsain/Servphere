import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curSelectedPageIndex : 0,
    formData : {

    }
}
const digitalSlice = createSlice({
    name : "digital",
    initialState,
    reducers: {
        setCurSelectedPageIndex : (state, action) => {
            state.curSelectedPageIndex = action.payload;
        },
        updateFormData : (state, action) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            }
        }
    }
});

export const {
    setCurSelectedPageIndex,
    updateFormData
} = digitalSlice.actions;

export default digitalSlice.reducer