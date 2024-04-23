import { createSlice } from "@reduxjs/toolkit"



const initialCategoryState = {
    category:[
        {
            id:1,
            clothing: "jeans",
            shoes:"Formal Shoes",
            muslim_wear:"Jubba",
            watches:"Business",
            jewellery:"Ring"
        },
        {
            id:2,
            clothing: "Tshart",
            shoes:" Shoes",
            muslim_wear:"Jubba",
            watches:"Business",
            jewellery:"Ring"
        },
    ]
}

const categorySlice = createSlice({
    name:"category",
    initialState:initialCategoryState,
    reducers:{
     shawCategory: (state)=>state,
     addCategory:(state, action)=>{
        state.category.push(action.payload)
    },
    updateCategory:(state,action)=>{
        const findIndex = state.category.findIndex((item)=>item.id ===action.payload.id)
        state.category[findIndex]= action.payload
    },
    deleteCategory:(state, action)=>{
       const id = action.payload
       state.category = state.category.filter((item)=> item.id !== id)
    }
    }
})





export const {addCategory,updateCategory,deleteCategory} = categorySlice.actions
export default categorySlice.reducer