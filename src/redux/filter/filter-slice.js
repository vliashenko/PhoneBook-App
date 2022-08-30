import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: ""
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload.filter
        },
    }
})

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;