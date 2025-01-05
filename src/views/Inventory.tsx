import ButtonsGroup from "@/features/inventory/components/buttons/ButtonsGroup";
import { columns } from "@/features/inventory/components/tables/columns";
import { DataTable } from "@/features/inventory/components/tables/data-table";
import { InventoryTable } from "@/features/inventory/types/table.type";
import { useEffect, useState } from "react";

async function getData(): Promise<InventoryTable[]> {
  return [
    {
      id: 1,
      itemName: "AMD Ryzen 5 3600X",
      category: "Electrónica",
      currency: "$",
      price: 190,
      quantity: 120,
    },
    {
      id: 2,
      itemName: "Intel Core i7-12700K",
      category: "Electrónica",
      currency: "$",
      price: 320,
      quantity: 80,
    },
    {
      id: 3,
      itemName: "NVIDIA GeForce RTX 3060",
      category: "Electrónica",
      currency: "$",
      price: 399,
      quantity: 60,
    },
    {
      id: 4,
      itemName: "Samsung 970 EVO Plus 1TB",
      category: "Almacenamiento",
      currency: "$",
      price: 89,
      quantity: 150,
    },
    {
      id: 5,
      itemName: "Corsair Vengeance LPX 16GB",
      category: "Memorias RAM",
      currency: "$",
      price: 79,
      quantity: 200,
    },
    {
      id: 6,
      itemName: "ASUS ROG Strix B550-F",
      category: "Tarjetas Madre",
      currency: "$",
      price: 180,
      quantity: 50,
    },
    {
      id: 7,
      itemName: "Cooler Master Hyper 212 Black Edition",
      category: "Refrigeración",
      currency: "$",
      price: 49,
      quantity: 120,
    },
    {
      id: 8,
      itemName: "Logitech MX Master 3S",
      category: "Periféricos",
      currency: "$",
      price: 99,
      quantity: 90,
    },
    {
      id: 9,
      itemName: "Dell Ultrasharp U2723QE",
      category: "Monitores",
      currency: "$",
      price: 649,
      quantity: 40,
    },
    {
      id: 10,
      itemName: "Be Quiet! Straight Power 11 750W",
      category: "Fuentes de Poder",
      currency: "$",
      price: 149,
      quantity: 70,
    },
  ];
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
      <p className="font-semibold text-xl">Inventario</p>
      <br />

      <ButtonsGroup />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Inventory;
