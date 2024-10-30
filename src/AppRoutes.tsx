import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

import { appRoutes } from "./lib/appRoutes.ts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<HomePage />} path={appRoutes.HOME} />
      </Route>

      <Route element={<LoginPage />} path={appRoutes.LOGIN} />
      <Route element={<NotFoundPage />} path={appRoutes.NOT_FOUND} />
    </Routes>
  );
}
