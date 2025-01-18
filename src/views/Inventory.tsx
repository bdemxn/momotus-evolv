import { mockData } from "@/data/mock-data";
import ButtonsGroup from "@/features/inventory/components/buttons/button-group";
import ResponsiveTable from "@/features/inventory/components/tables/responsive";
import { InventoryTable } from "@/features/inventory/types/table.type";
import { useEffect, useState } from "react";

async function getData(): Promise<InventoryTable[]> {
  return mockData;
}

const Inventory = () => {
  const [data, setData] = useState<InventoryTable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="top-0 backdrop-blur-sm z-40 sticky p-3">
        <p className="sm:font-semibold sm:text-xl font-bold text-2xl mb-5 dark:text-white">
          Inventario
        </p>

        <ButtonsGroup />
      </div>

      <ResponsiveTable data={data} />
    </div>
  );
};

export default Inventory;
