import { Field, FormikProvider, Form } from "formik";
import useItemForm from "../../hooks/useItemForm";
import { createItemFormInputs } from "../data/createItem.data";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";
import SelectCategory from "../selects/SelectCategory";
import SelectCurrency from "../selects/SelectCurrency";

const CreateItemForm = () => {
  const { formik } = useItemForm();

  return (
    <FormikProvider value={formik}>
      <br />

      <Form className="flex flex-col gap-y-2 font-inter">

        <SelectCategory />
        {createItemFormInputs.map(({ id, itemName, name, placeholder }) => (
          <Field
            key={id}
            id={itemName}
            name={name}
            placeholder={placeholder}
            className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
          />
        ))}
        <SelectCurrency />

        <Button type="submit">
          <PackagePlus /> Crear
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default CreateItemForm;
