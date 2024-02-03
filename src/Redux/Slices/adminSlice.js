import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: [],
    reducers: {
        getUsers: (state, action) => {
            return action.payload;
        }
    }
});

export const { getUsers } = adminSlice.actions;
export default adminSlice.reducer;