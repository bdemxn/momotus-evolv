import ButtonsGroup from "@/features/inventory/components/buttons/button-group";
import ResponsiveTable from "@/features/inventory/components/tables/responsive";
import { InventoryProvider } from "@/features/inventory/store/inventory-provider";

const Inventory = () => {
  return (
    <InventoryProvider>
      <div className="top-0 backdrop-blur-sm z-40 sticky p-3">
        <p className="sm:font-semibold sm:text-xl font-bold text-2xl mb-5 dark:text-white">
          Inventario
        </p>

        <ButtonsGroup />
      </div>

      <ResponsiveTable />
    </InventoryProvider>
  );
};

export default Inventory;
