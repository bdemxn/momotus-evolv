import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const CleanShopBtn = () => {
  function clearShopCart() {
    const toastMessage: string = "El carrito ha sido eliminado";
    toast.success(toastMessage, {
      duration: 2000,
    });
  }

  return (
    <Button
      variant="outline"
      className="dark:text-white"
      onClick={clearShopCart}
    >
      <Trash2 />
      Limpiar Carrito
    </Button>
  );
};

export default CleanShopBtn;
