import { supabase } from "@/features/auth/services/supabaseClient";
import { Item } from "../types/item.interface";
import { toast } from "sonner";

export const submitItem = async (values: Item) => {
  const { error } = await supabase
    .from('inventory_items')
    .insert([
      {
        "item_name": values.item_name,
        "category": values.category,
        "price": values.price,
        "quantity": values.quantity,
        "currency": values.currency
      }
    ]).select();

  if (error) {
    console.log(error)
    return toast.error(`Error creando el artículo: ${values.item_name}`);
  }

  toast.success(`El artículo ${values.item_name} ha sido creado éxitosamente.`);
}