import { supabase } from "@/features/auth/services/supabaseClient";
import { Category } from "../types/category.interface";
import { toast } from "sonner";

export const submitCategory = async (values: Category) => {
  const { error } = await supabase
    .from('inventory_categories')
    .insert([
      {
        "category_name": values.category
      }
    ]).select();

  if (error) {
    return toast.error(`Error creando la categoría: ${values.category}`);
  }

  toast.success(`La categoría ${values.category} ha sido creada éxitosamente`);
}