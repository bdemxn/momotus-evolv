import { ScrollArea } from "@/components/ui/scroll-area";
import { mockData } from "@/data/mock-data";
import ButtonsGroup from "@/features/sales/components/button-group";
import CartCard from "@/features/sales/components/cart-card";
import ProductCard from "@/features/sales/components/product-card";

const Sales = () => {
  return (
    <div className="h-screen">
      <div className="top-0 sticky backdrop-blur-sm z-40 p-3">
        <p className="sm:font-semibold sm:text-xl font-bold text-2xl mb-5 dark:text-white">
          Punto de Ventas
        </p>

        <ButtonsGroup />
      </div>

      <div className="dark:text-white container mx-auto p-3 w-screen h-screen grid grid-cols-2">
        <ScrollArea>
          {mockData.map(
            ({ id, category, currency, itemName, price, quantity }) => (
              <ProductCard
                key={id}
                id={id}
                category={category}
                currency={currency}
                itemName={itemName}
                price={price}
                quantity={quantity}
              />
            )
          )}
        </ScrollArea>

        <div className="px-3">
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Sales;
