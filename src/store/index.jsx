import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import products from "./slices/product.slice";
export default configureStore({
  reducer: {
    products: products,
    isLoading: isLoading,
  },
});
