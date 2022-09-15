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
import MyAccount from "../components/userInfo/MyAccount";
import { LoadProducts } from "../redux/actions";
import { useDispatch } from "react-redux";
import SecureRoute from "./SecureRoute";
import NonSecureRoute from "./NonSecureRoute";
import Profile from "../components/profile/Profile";

const NOMatch = () => {
  return (
    <div style={{ color: "red", fontSize: "40px", textAlign: "center" }}>
      404 Page Not Found
    </div>
  );
};

function RoutesBasic() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(LoadProducts());
  }
  return (
    <Switch>
      <Route path="/forgot">
        <>Coming soon</>
      </Route>
      <NonSecureRoute path="/about" Component={About} />
      <NonSecureRoute path="/contact" Component={Contact} />
      <NonSecureRoute path="/login" exact Component={SignIn} />
      <NonSecureRoute path="/register" Component={SignUp} />
      <SecureRoute path="/description" Component={ProductDescription} />
      <SecureRoute path="/cartList" Component={CartTableList} />
      <SecureRoute path="/checkout" Component={Checkout} />
      <SecureRoute path="/myaccount" Component={MyAccount} />
      <SecureRoute path="/profile" Component={Profile} />
      <Route path="/" exact>
        <Body />
      </Route>
      <Route path="*">
        <NOMatch />
      </Route>
    </Switch>
  );
}

export default RoutesBasic;
