import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../store/slices/product.slice";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data?.products);
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  console.log(products);
  return (
    <div className="products_container">
      {products?.map((product, index) => (
        <div className="products_card">
          <div className="product">
            <a href="">
              <div className="img_product">
                <img src={product.productImgs[0]} alt="product" />
              </div>
              <div className="info">
                <h3>{product.title}</h3>

                <h5>price</h5>
                <h3>
                  <span>{product.price}</span>
                </h3>
              </div>
            </a>
            <button>cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
