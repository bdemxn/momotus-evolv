import { Category } from "./category.interface";
import { Item } from "./item.interface";

export interface InventoryContextInterface {
  categoryList: Category[] | null
  inventoryList: Item[]
}