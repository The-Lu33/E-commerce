import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsloading } from "./isLoading.slice";
export const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const getProductThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsloading(false)));
};
console.log(products);

export const { setProducts } = products.actions;

export default products.reducer;
