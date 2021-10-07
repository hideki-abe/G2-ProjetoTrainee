import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useContext(AuthContext);

  if (!signed && isPrivate) {
    //login
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    //home
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}