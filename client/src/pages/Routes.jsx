import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import hero3 from "./images/hero-3.jpg";

const Body = ({ token }) => {
  return (
    <>
      {token ? (
        <>Products Page</>
      ) : (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                style={{ height: "544px" }}
                src={hero3}
                alt="First slide"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function RoutesBasic() {
  const token = localStorage.getItem("token");
  return (
    <Switch>
      <Route path="/" exact>
        <Body token={token} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {token ? (
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
