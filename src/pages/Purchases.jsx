import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchaseThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
    const purchase = useSelector(state => state.purchase)
  useEffect(() => {
    dispatch(getPurchaseThunk());
  }, []);
  console.log(purchase);
  // const formateDate = (form) => {
  //   const date = form.toLocaleDateString();
  //   let mouth = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "Octuber",
  //     "November",
  //     "December",
  //   ];
  //   let formate = null;
  //   formate = date.split("/");
  //   console.log(formate);
  //   formate[1] = parseInt(formate[1]);
  //   for (let i = 0; i < mouth.length; i++) {
  //     if (formate[1] === i + 1) {
  //       formate[1] = mouth[i];
  //       console.log(formate);
  //     }
  //   }
  //   formate = `${formate[0]} ${formate[1]} ${formate[2]}`;
  //   return formate;
  // };

  return (
    <div>
      <h2>Purchases</h2>
      <div>

      { purchase.map((purchaseProduct) =>(
        <h3>{purchaseProduct.createdAt.toDateString()}</h3>
        ))}
        </div>

    </div>
  );
};

export default Purchases;
