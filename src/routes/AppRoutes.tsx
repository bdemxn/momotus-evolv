import { Route, Routes } from "react-router";
import Home from "../views/Home";
import Inventory from "../views/Inventory";
import Sales from "../views/Sales";
import Billing from "../views/Billing";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="sales" element={<Sales />} />
        <Route path="billing" element={<Billing />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
