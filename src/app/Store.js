import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";
import categoryReducer from "../Pages/Category/CategorySlice";
import brandReducer from "../Pages/Brand/brandSlice";


const store = configureStore({
  reducer: {
    productReducer: productReducer,
    categoryReducer: categoryReducer,
    brandReducer : brandReducer
  },
});

export default store;
