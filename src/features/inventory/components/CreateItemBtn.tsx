import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import CreateItemForm from "./CreateItemForm";

const CreateItemBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-inter">
          <Plus /> Añadir artículo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] font-inter">
        <DialogHeader>
          <DialogTitle>Crear artículo</DialogTitle>
          <DialogDescription>
            Puedes añadir un artículo a tu inventario
          </DialogDescription>
        </DialogHeader>

        <CreateItemForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateItemBtn;
