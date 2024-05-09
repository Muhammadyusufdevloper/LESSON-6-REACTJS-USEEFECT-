import React, { useEffect, useState } from "react";
import "./Product.scss";
import Modal from "../modal/Modal";
import axios from "../../api";
import star from "../../assets/svg/product/start.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Product = () => {
  const [prodact, setProdact] = useState(null);
  const [productApi, setPrudutApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(true);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`, {
        params: {
          limit: 3 + 3 * limit,
        },
      })
      .then((respons) => setPrudutApi(respons.data.products))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
        setLoadingBtn(false);
      });
  }, [limit]);

  const product = productApi?.map((product) => (
    <div className="product__card" key={product.id}>
      <div onClick={() => setProdact(product)} className="product__card-img">
        <img src={product.images[0]} alt={product.title + " " + "images"} />
      </div>
      <div className="product__card-info">
        <h3 className="product__card-info__title">{product.title}</h3>
        <img src={star} alt="star img" />
        <div className="product__card-info__part">
          <p className="product__card-info__old-price">
            {product.price + 100 + "$"}
          </p>
          <p className="product__card-info__new-price">{product.price + "$"}</p>
        </div>
      </div>
    </div>
  ));
  let loadingCount = (
    <div className="product__loading__cards">
      <div className="product__loading__img-part loading__anime"></div>
      <div className="product__loading__info-part">
        <div className="loading__anime product__loading__info-part-div"></div>
        <div className="loading__anime product__loading__info-part-div"></div>
        <div className="loading__anime product__loading__info-part-div"></div>
      </div>
    </div>
  );
  let loadingData = (
    <div className="product__loading">
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
    </div>
  );
  return (
    <>
      <section className="product">
        <div className="container product__wrapper">
          <p className="product__desc">Find your favourite smart watch.</p>
          <h2 className="product__title">Our Latest Products</h2>
          {loading ? loadingData : <></>}
          <div className="product__cards">{product}</div>

          <div className="product__btn__loading">
            {
            loadingBtn ? <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box> : <></>
            }
            <button
              onClick={() => setLimit((prev) => prev + 1)}
              className="product__btn"
              disabled={loadingBtn}
            >
              View More
            </button>
          </div>
        </div>
      </section>
      {prodact ? <Modal data={prodact} close={setProdact} /> : <></>}
    </>
  );
};

export default Product;
