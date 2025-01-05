import { ColumnDef } from "@tanstack/react-table";
import { InventoryTable } from "../../types/table.type";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<InventoryTable>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "itemName",
    header: "Producto",
  },
  {
    accessorKey: "category",
    header: "Categoría",
  },
  {
    accessorKey: "currency",
    header: "Moneda",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only font-inter">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-inter">
              Acciones
            </DropdownMenuLabel>
            <DropdownMenuItem className="font-inter">
              <Pencil />
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-inter text-red-600">
              <Trash2 />
              Eliminar producto
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
