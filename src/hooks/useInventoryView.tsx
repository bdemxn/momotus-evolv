import { InventoryContext } from "@/features/inventory/context/inventory-context";
import { useContext } from "react";

export const useInventoryView = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }

  return context;
};
