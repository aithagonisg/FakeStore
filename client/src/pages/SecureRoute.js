import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function SecureRoute({ Component, ...rest }) {
  const auth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return <Redirect to={{ path: "/" }} />;
      }}
    />
  );
}
