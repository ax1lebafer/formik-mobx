import UserStore from "../../stores/UserStore.ts";
import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes.ts";

function PrivateRoute() {
  const { isLoggedIn } = UserStore;

  return isLoggedIn ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
}

export default PrivateRoute;
