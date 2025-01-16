import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CleanShopBtn = () => {
  return (
    <Button variant="outline">
      <Trash2 />
      Limpiar Carrito
    </Button>
  );
};

export default CleanShopBtn;
