import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Body } from "../components/Body";
import ProductDescription from "../components/Products/ProductDescription";
import CartTableList from "../components/CartList/CartTableList";
import Checkout from "../components/checkout/Checkout";

const NOMatch = () => {
  return (
    <div style={{ color: "red", fontSize: "40px", textAlign: "center" }}>
      404 Page Not Found
    </div>
  );
};

function RoutesBasic() {
  return (
    <Switch>
      <Route path="/" exact>
        <Body />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/description">
        <ProductDescription />
      </Route>

      <Route path="/forgot">
        <>Coming soon</>
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
      <Route path="/cartList">
        <CartTableList />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="*">
        <NOMatch />
      </Route>
    </Switch>
  );
}

export default RoutesBasic;
