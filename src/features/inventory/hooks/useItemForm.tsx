import { useFormik } from "formik";
import { submitItem } from "../services/submitItem";
import { validationItem } from "../services/validationItem";

const useItemForm = () => {
  const formik = useFormik({
    initialValues: {
      itemName: '',
      category: '',
      currency: 'C$',
      quantity: null,
      price: null
    },
    onSubmit: (values) => submitItem(values),
    validationSchema: validationItem
  })

  return { formik };
};

export default useItemForm;
