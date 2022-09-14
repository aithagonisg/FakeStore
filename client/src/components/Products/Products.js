import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Card";
import { LoadProducts } from "../../redux/actions";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const prod = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadProducts());
  }, []);
  useEffect(() => {
    setProducts(prod);
  }, [prod]);

  return (
    <div className="products-grid">
      {products.map((item, index) => (
        <Fragment key={index}>
          <ProductCard cardInfo={item} />
        </Fragment>
      ))}
    </div>
  );
}
