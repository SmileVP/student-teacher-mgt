import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

export default configureStore({
    //assigning user reducer function to users
    reducer:{
        users:userReducer // users name is used in all users  state.users and store reduce
    }
})