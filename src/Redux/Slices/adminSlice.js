import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: [],
    reducers: {
        getUsers: (state, action) => {
            return action.payload;
        },
        addAdmin: (state, action) => {
            state.push(action.payload);
        },
        updateAdmin: (state, action) => {

        },
        deleteAdmin: (state, action) => {

        }
    }
});

export const { getUsers, addAdmin } = adminSlice.actions;
export default adminSlice.reducer;