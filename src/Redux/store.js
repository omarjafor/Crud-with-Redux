import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/UserSlice'
import adminSlice from './Slices/adminSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
        admin: adminSlice
    },
})

export default store;