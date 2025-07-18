import { useRoutes } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import MainLayout from "../layouts/MainLayout";

//HOC
import RequireAuth from "../HOC/RequireAuth";
import GuestRoute from "../HOC/GuestRouteAuth";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/login",
      element: (
        <GuestRoute>
          <LoginPage />
        </GuestRoute>
      ),
    },
    {
      path: "/",
      element: (
        <RequireAuth>
          <MainLayout />
        </RequireAuth>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return routes;
}

const NotFoundPage = () => {
  return <div>Page Not Found</div>;
};
