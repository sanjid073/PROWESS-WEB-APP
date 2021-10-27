import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function PrivateRoute(props) {
  const { children, ...rest } = props;

  const { firebaseContext } = useAuth();
  const { user,isLoading } = firebaseContext;
  if(isLoading){
      return <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;