import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Card";
import {
  getProductsList,
  getCartAndOrdersList,
} from "../../services/Authsevice";
import {
  setCartData,
  setOrdersData,
  setProductsData,
  setAddressData,
} from "../../redux/actions";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const prod = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsList()
      .then((res) => res.json())
      .then((products) => {
        dispatch(setProductsData(products));
      });
    getCartAndOrdersList()
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCartData(data.cart.cart));
        dispatch(setOrdersData(data.cart.orders));
        dispatch(setAddressData(data.cart.address));
      });
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
