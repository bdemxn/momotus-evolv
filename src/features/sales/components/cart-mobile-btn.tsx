import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const CartMobileBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="font-inter">
          <ShoppingBag /> Ver carrito
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="dark:text-white">Carrito</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="m-3 h-[45vh]">
          <p className="font-inter dark:text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            quis numquam quia voluptatem doloribus nostrum culpa sint corrupti
            quae consequuntur molestiae tenetur pariatur, consequatur, facere
            ratione. Dignissimos nisi quasi suscipit quas. Nisi illo
            consequatur, nam quidem quis a pariatur sapiente incidunt est atque
            repellat dolor aut quibusdam magni sint commodi soluta praesentium
            eum. Alias nam illum voluptates sint deserunt ex modi natus quod
            voluptatum molestiae
          </p>
        </ScrollArea>

        <div className="flex m-3">
          <Button className="w-full">Confirmar compra</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartMobileBtn;
