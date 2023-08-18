import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "../slices/BlogSlice"

const store = configureStore({
  reducer: {
    users: UserSlice,
 
  },
})
export default store