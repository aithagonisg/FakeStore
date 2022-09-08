import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Body } from "../components/Body";
import ProductDescription from "../components/Products/ProductDescription";

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
      {localStorage.getItem("token") ? (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      ) : (
        <>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </>
      )}
      <Route path="/forgot">
        <>Coming soon</>
      </Route>
      <Route path="*">
        <>Some thing went wrong reach out to admin</>
      </Route>
    </Switch>
  );
}

export default RoutesBasic;
