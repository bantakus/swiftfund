import { baseURL } from "@/pages/api";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState ={
    profile:{},
    isLoading:true
}

export const getData = createAsyncThunk('getting-data', (id,token) => {

    
    return axios.get(`${baseURL}/users/`+id,{headers:{authorizatioin:"Bearer"+token}}).then(res => res.data).catch(err => console.log(err));
});




const postsSlice = createSlice(
    {
        name:"data",
        initialState,
        
        extraReducers:{
            [getData.pending]:(state)=>{
                state.isLoading = true;
            },
            [getData.fulfilled]:(state,action)=>{
                state.isLoading = false;
                state.data = action.payload;
                console.log(action.payload);

            },
            [getData.rejected]:(state)=>{
                state.isLoading = false;
            }
            
        }
    }
)


export default postsSlice.reducer;
 