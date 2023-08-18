import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
 const initialState=[
    {
        id:uuidv4(),
        img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title:'Aisha',
        desc:"AISHA'S FIRST BLOG",
        name:"by Aisha Mammadova"
    },
    {
        id:uuidv4(),
        img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title:'Aisha',
        desc:"AISHA'S FIRST BLOG",
        name:"by Aisha Mammadova"
    },
 ];

  export const UserSlice=createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.push(action.payload);
        }

    }
  })
export const {addUser}=UserSlice.actions;
export default UserSlice.reducer