import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import CreateItemForm from "../form/create-item-form";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CreateItemBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="font-inter">
            <Plus /> Añadir artículo
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] font-inter dark:text-white">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Crear artículo</DialogTitle>
            <DialogDescription>
              Puedes añadir un artículo a tu inventario
            </DialogDescription>
          </DialogHeader>

          <CreateItemForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="font-inter">
          <Plus /> Añadir artículo
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Crear artículos</DrawerTitle>
          <DrawerDescription>
            Puedes añadir un artículo a tu inventario
          </DrawerDescription>
        </DrawerHeader>

        <div className="m-3">
          <CreateItemForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateItemBtn;
