import {createSlice} from '@reduxjs/toolkit';

const initialstate={
    user:null,
};

export const userSlice=createSlice({
    name:"userr",
    initialState:initialstate,
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload;
        },
        removeuser:(state,action)=>{
            state.user=null;
        }
    }
})
export const{setuser,removeuser} =userSlice.actions;

export default userSlice.reducer;

