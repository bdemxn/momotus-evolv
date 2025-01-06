import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Tag } from "lucide-react";
import CreateCategoryForm from "../form/CreateCategoryForm";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const CreateCategoryBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="font-inter">
            <Tag /> Añadir Categoría
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] font-inter">
          <DialogHeader>
            <DialogTitle>Añade una categoría</DialogTitle>
            <DialogDescription>
              Así podrás tener organizado tu inventario
            </DialogDescription>
          </DialogHeader>

          <CreateCategoryForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="font-inter">
          <Tag /> Añadir Categoría
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Añade una categoría</DrawerTitle>
          <DrawerDescription>
            Así podrás tener organizado tu inventario
          </DrawerDescription>
        </DrawerHeader>

        <div className="m-3">
          <CreateCategoryForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateCategoryBtn;
