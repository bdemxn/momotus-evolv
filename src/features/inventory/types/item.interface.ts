export interface Item {
  item_name: string;
  category: string;
  currency: string;
  quantity: number | null;
  price: number | null;
}

export interface InventoryList {
  itemList: Item[]
}