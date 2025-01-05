import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Tag } from "lucide-react";
import CreateCategoryForm from "../form/CreateCategoryForm";

const CreateCategoryBtn = () => {
  return (
    <Dialog>
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
};

export default CreateCategoryBtn;
