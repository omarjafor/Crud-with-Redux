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
            const index = state.findIndex(x => x._id === action.payload)
            console.log(index);
        },
        deleteAdmin: (state, action) => {
            const id = action.payload;
            state = state.filter(u => u._id != id);
            return state;
        }
    }
});

export const { getUsers, addAdmin, updateAdmin, deleteAdmin } = adminSlice.actions;
export default adminSlice.reducer;