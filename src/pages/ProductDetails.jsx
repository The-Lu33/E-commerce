import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk } from "../store/slices/product.slice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const products = useSelector((state) => state.products);
  const oneProduct = products.find(
    (productSelect) => productSelect.id === Number(id)
  );
  const relateProducts = products.filter(
    (product) => product.category.id === oneProduct.category?.id
  );
  console.log(relateProducts);

  return (
    <div>
      <h2>{oneProduct?.title}</h2>

      <div>
        {relateProducts.map(relateProduct =>(
            <Link to={`/product/${relateProduct.id}`}>
            <h2>{relateProduct.title}</h2>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
