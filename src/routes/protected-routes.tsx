import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";
import AppLayout from "@/layouts/app-layout";

const ProtectedRoutes = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default ProtectedRoutes;
