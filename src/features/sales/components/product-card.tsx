import { Button } from "@/components/ui/button";
import { ProductType } from "../types/product.type";
import { Plus, TagIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProductCard = ({
  category,
  currency,
  itemName,
  price,
  quantity,
}: ProductType) => {
  return (
    <div className="border rounded-md mr-3 mb-3 p-2 shadow-sm border-black/20 dark:border-white/20">
      <section>
        <p className="dark:text-white/80 flex items-center gap-x-1 text-sm"><TagIcon className="size-4"/> {category}</p>
        <p className="font-bold">{itemName}</p>
        <p>
          Precio: {currency}{price}
        </p>
        <p>Cantidad: {quantity}</p>
      </section>

      <section className="gap-x-2 flex items-center justify-end">
        <Input className="w-16" placeholder="Cant."/>
        <Button><Plus />Añadir</Button>
      </section>
    </div>
  );
};

export default ProductCard;
