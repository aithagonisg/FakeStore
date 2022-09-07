import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./Card";
import {
  getProductsList,
  getCartAndOrdersList,
} from "../../services/Authsevice";
import { setCartData, setOrdersData } from "../../redux/actions";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsList()
      .then((res) => res.json())
      .then((products) => setProducts(products));
    getCartAndOrdersList()
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCartData(data.cart.cart));
        dispatch(setOrdersData(data.cart.orders));
      });
  }, []);

  return (
    <div className="products-grid">
      {products.map((item) => (
        <ProductCard cardInfo={item} />
      ))}
    </div>
  );
}
