import { useFormik } from "formik";
import { validationCategory } from "../services/validationCategory";
import { submitCategory } from "../services/submitCategory";

export const useCategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit: (values) => submitCategory(values),
    validationSchema: validationCategory
  });

  return { formik };
};
