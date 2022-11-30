import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchaseThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
    // const purchase = useSelector(state => state.purchase)
  useEffect(() => {
    dispatch(getPurchaseThunk());
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
    </div>
  );
};

export default Purchases;
