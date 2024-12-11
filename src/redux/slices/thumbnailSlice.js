import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    curSelectedPageIndex : 0,
    formData : {

    }
}
const thumbnalSlice = createSlice({
    name : "thumbnail",
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
        },
        
    }
});

//uploadFormDataToDB

export const {
    setCurSelectedPageIndex,
    updateFormData,
} = thumbnalSlice.actions;

export default thumbnalSlice.reducer