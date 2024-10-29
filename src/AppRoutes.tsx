import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

import { appRoutes } from "./lib/appRoutes.ts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomePage />} path={appRoutes.HOME} />
      <Route element={<LoginPage />} path={appRoutes.LOGIN} />
      <Route element={<NotFoundPage />} path={appRoutes.NOT_FOUND} />
    </Routes>
  );
}
