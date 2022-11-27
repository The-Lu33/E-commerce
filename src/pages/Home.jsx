import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterInputProductsThunk,
  filterProductsThunk,
  getProductThunk,
} from "../store/slices/product.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [categorys, setCategorys] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    dispatch(getProductThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategorys(res.data.data.categories));
  }, []);
  const filterProducts = (e) => {
    dispatch(filterProductsThunk(e.target.value));
  };

  return (
    <div className="home">
      <div className="filter">
        <Form.Select
          aria-label="Default select example"
          onChange={filterProducts}>
          <option value={getProductThunk}>All</option>
          {categorys.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </Form.Select>
      </div>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => dispatch(filterInputProductsThunk(inputValue))}>
            Search
          </Button>
        </InputGroup>
      </div>

      <div className="products_container">
        {products?.map((product, index) => (
          <div className="products_card">
            <div className="product" key={products.id}>
              <Link to={`/product/${product.id}`}>
                <div className="img_product">
                  <img src={product.productImgs[0]} alt="product" />
                </div>
                <div className="info">
                  <h3>{product.title}</h3>

                  <h6>price</h6>
                  <h3>
                    <span>{product.price}</span>
                  </h3>
                </div>
              </Link>
              <button>
                <img src="./image/bxs-cart.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
