import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsloading } from "./isLoading.slice";
export const cartProducts = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    setCartProducts: (state, action) =>{
        return action.payload
    } 
  },
});
export const getCartProductThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/cart`,getConfig())
    .then((res) => dispatch(setCartProducts(res.data)))
    .finally(() => dispatch(setIsloading(false)));
};
export const { setCartProducts } = cartProducts.actions;
export default cartProducts.reducer;
