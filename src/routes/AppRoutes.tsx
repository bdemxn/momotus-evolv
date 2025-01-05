import { Route, Routes } from "react-router";
import Home from "../views/Home";
import Inventory from "../views/Inventory";
import Sales from "../views/Sales";
import Billing from "../views/Billing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="sales" element={<Sales />} />
      <Route path="billing" element={<Billing />} />
    </Routes>
  );
};

export default AppRoutes;
