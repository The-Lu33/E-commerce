import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
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
  console.log(oneProduct);

  return (
    <div>
      <div className="product_container_details">
        <div className="slide_container">
          <Carousel fade variant="dark" pause={"hover"} touch={true} >
            {oneProduct?.productImgs.map((productImg) => (
              <Carousel.Item onSlid style={{height:'500px'}}>
                <img className="d-block w-100 h-100" src={productImg} alt="" style={{objectFit:'contain'}}/>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="information_product">
          <h4>{oneProduct?.title}</h4>
          <span>{oneProduct?.description}</span>

          <div>
            <span>price</span>
            <h5>{oneProduct?.price}</h5>
            <div>
              <span>Quantity</span>
              <h5>0</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <div>
        {relateProducts.map((relateProduct) => (
          <Link to={`/product/${relateProduct.id}`}>
            <h2>{relateProduct.title}</h2>
            <div>
              <img src={relateProduct?.productImg[0]} alt="" />
            </div>
          </Link>
        ))}
      </div> */}
      <div className="products_cards_container">
        {relateProducts?.map((relateProduct, index) => (
          <div className="products_card">
            <div className="product" key={relateProduct.id}>
              <Link to={`/product/${relateProduct.id}`}>
                <div className="img_product">
                  <img src={relateProduct.productImgs[0]} alt="product" />
                </div>
                <div className="info">
                  <h3>{relateProduct.title}</h3>

                  <h6>price</h6>
                  <h3>
                    <span>{relateProduct.price}</span>
                  </h3>
                </div>
              </Link>
              <button className="btn_cart">
                <img src="./image/bxs-cart.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
