import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    intialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const {id, name, email} = action.payload;
            const uuser = state.find(user => user.id === id);
            if(uuser){
                uuser.name = name;
                uuser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uuser = state.find(user => user.id === id);
            if(uuser){
                return state.filter(user => user.id !== id);
            }
        },
    }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;