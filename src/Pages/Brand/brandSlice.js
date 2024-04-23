import { createSlice } from "@reduxjs/toolkit"



const initialStateBrand = {
    brand:[
        {
            id:1,
            fristName:"Jahid",
            lastName:"Hasan",
            email:"jahid@gmail.com",
            number:"01623657895",
            city:"Rajshahi",
            country:"Bangladesh",
            zip:"4568"
        }
    ]
}

const brandSlice = createSlice({
    name:"brand",
    initialState:initialStateBrand,
    reducers:{
        ShowBrand:(state)=> state,
        AddCollect:(state, action)=>{
            state.brand.push(action.payload)
        },
        updateBrand:(state, action)=>{
          const index = state.brand.findIndex((item)=> item.id === action.payload.id)
          state.brand[index]= action.payload
        },
        deleteBrand:(state, action)=>{
            const id = action.payload
            state.brand = state.brand.filter((item)=> item.id !== id)
        }
    }
})



export const { AddCollect, deleteBrand, updateBrand} = brandSlice.actions
export default brandSlice.reducer