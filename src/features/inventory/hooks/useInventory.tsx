// import { useCallback, useState } from "react";
import { Item } from "../types/item.interface";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/features/auth/services/supabaseClient";
import { toast } from "sonner";
import useSWR from "swr";

export const useInventory = () => {
  const { user } = useAuth();

  const fetchInventory = async (): Promise<Item[]> => {
    const { data, error } = await supabase
      .from("inventory_items")
      .select("id, item_name, category, currency, quantity, price")
      .eq("user_id", user?.id);

    if (error) throw Error(error.message);

    return data || [];
  };

  const { data, error, mutate } = useSWR(
    user ? `inventory-${user.id}` : null,
    fetchInventory,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  const inventoryList = data || [];

  if (error) {
    console.error("Error con el inventario: ", error.message);
    toast.error("Error al obtener el inventario");
  }

  if (!inventoryList) {
    toast.warning("No tienes artículos en tu inventario");
  }

  return { inventoryList, mutate };
};
