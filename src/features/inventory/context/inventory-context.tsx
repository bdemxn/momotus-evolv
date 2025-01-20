import { createContext } from "react";
import { InventoryContextInterface } from "../types/inventory.interface";

export const InventoryContext = createContext<InventoryContextInterface | null>(null);