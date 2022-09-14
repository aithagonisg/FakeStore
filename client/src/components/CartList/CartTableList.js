import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListTable from "./ListTable";

function CartTableList(props) {
  const cartList = useSelector((state) => state.cart);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(cartList);
  }, [cartList]);

  return (
    <div>
      <ListTable rows={list} />
    </div>
  );
}

export default CartTableList;
