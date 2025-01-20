import { useAuth } from "@/hooks/useAuth";
import { Category } from "../types/category.interface";
import { supabase } from "@/features/auth/services/supabaseClient";
import useSWR from "swr";
import { toast } from "sonner";

export const useCategories = () => {
  const { user } = useAuth();

  const fetchCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
      .from("inventory_categories")
      .select("category_name, id")
      .eq("user_id", user?.id);

    if (error) throw Error(error.message);

    return data || [];
  };

  const { data, error, mutate } = useSWR(
    user ? `categories-${user.id}` : null,
    fetchCategories,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  const categoryList = data || [];

  if (error) {
    console.error("Error con las categorías: ", error.message);
    toast.error("Error al obtener las categorías");
  }

  if (!categoryList) {
    toast.warning("No tienes categorías creadas");
  }

  return { categoryList, mutate };
};
