import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    store_id : ''
}
const StoreIdSlice = createSlice({
    name : "StoreId",
    initialState,
    reducers: {
        setStoreId : (state, action) => {
            state.store_id = action.payload;
        },
    }
});

export const {
    setStoreId
} = StoreIdSlice.actions;

export default StoreIdSlice.reducer