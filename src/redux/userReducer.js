import { createSlice } from "@reduxjs/toolkit";
 
export const userReducer=createSlice({
    name:'users', //no use just slice name ; 

    //giving initial values to the table field
    initialState:{
       userData:[
        {
       studentName:"Vishnu",
        email:"vishnu@gmail.com",
        mobile:"9080376729",
        batch:"b40",
        mentorName:"Nagaraj"
    },
    {
        studentName:"Balaa",
        email:"balu@gmail.com",
        mobile:"9080376727",
        batch:"b38",
        mentorName:"Balaji"
    }
    ]
    },


    //to provide actions
    reducers:{
        addUser:(state,action)=>{
            state.userData.push(action.payload)
        },
        editUser:(state,action)=>{
            state.userData.splice(action.payload.index,1,action.payload.data)
        },
        deleteUser:(state,action)=>{
            state.userData.splice(action.payload.index,1)
        }
    }

 
})

export const{addUser,editUser,deleteUser}=userReducer.actions
export default userReducer.reducer