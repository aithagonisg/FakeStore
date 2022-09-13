import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ListTable from "./ListTable";

function CartTableList(props) {
  const cartList = useSelector((state) => state.cart);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(cartList);
  }, [cartList]);

  return (
    <div>
      {cartList.length <= 0 ? <Redirect to="/" /> : <ListTable rows={list} />}
    </div>
  );
}

export default CartTableList;
