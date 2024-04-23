import { createSlice } from '@reduxjs/toolkit'


const initialProduct = {
    products:[
        {
            id:1,
             name: "Tshart",
             price: 400,
             color: "white",
             size:"xl"

        },
        {
            id:2,
            name: "Pant",
            price: 800,
            color:"blue",
            size:"xl"

        },

        
    ]
}

const productSlice = createSlice({
    name: "products",
    initialState: initialProduct,
    reducers:{
        ShowProduct:(state)=> state,
        addProduct:(state, action)=>{
            state.products.push(action.payload)
        },
        updateProduct: (state, action)=> {
            const findInd = state.products.findIndex((item)=>item.id === action.payload.id);
            state.products[findInd]= action.payload
           },
        deleteProduct:(state, action)=>{
           const id = action.payload
           state.products = state.products.filter((product)=> product.id !== id)
        }
    }
})

 export const {ShowProduct,addProduct,updateProduct,deleteProduct} = productSlice.actions
 export default productSlice.reducer;