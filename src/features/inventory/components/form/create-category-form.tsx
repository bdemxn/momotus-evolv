import { Field, FormikProvider, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Tags } from "lucide-react";
import { useCategoryForm } from "../../hooks/useCategoryForm";

const CreateCategoryForm = () => {
  const { formik } = useCategoryForm();

  return (
    <FormikProvider value={formik}>
      <br />

      <Form className="flex flex-col gap-y-2 font-inter">
        <Field
          id="category"
          name="category"
          placeholder="Categoría"
          className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
        />

        <Button type="submit">
          <Tags /> Crear
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default CreateCategoryForm;