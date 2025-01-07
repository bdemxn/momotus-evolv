import AppLayout from "@/layouts/AppLayout";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isAuth = true;

  return isAuth ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
