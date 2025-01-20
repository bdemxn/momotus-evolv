import { LayoutProps } from "@/types/layout.props";
import { useCategories } from "../hooks/useCategories";
import { InventoryContext } from "../context/inventory-context";
import { useInventory } from "../hooks/useInventory";

export const InventoryProvider = ({ children }: LayoutProps) => {
  const { inventoryList } = useInventory();
  const { categoryList } = useCategories();

  return (
    <InventoryContext.Provider value={{ categoryList, inventoryList }}>
      {children}
    </InventoryContext.Provider>
  );
};
