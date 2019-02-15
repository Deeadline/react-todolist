import React from "react";
import { Redirect, Route } from "react-router-dom";
import { FirebaseAuthContext } from "../../context/context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <FirebaseAuthContext.Consumer>
      {context => {
        console.log(context);

        return (
          <Route
            {...rest}
            render={props =>
              context.isUserSignedIn ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
        );
      }}
    </FirebaseAuthContext.Consumer>
  );
};
