import * as yup from "yup";

export const validationItem = yup.object({
  item_name: yup
    .string()
    .required("Nombre del producto es requerido"),
  category: yup
    .string()
    .required("Debe seleccionar una categoría"),
  currency: yup
    .string()
    .required("Debe seleccionar una moneda"),
  quantity: yup
    .number()
    .required("Digíte una cantidad válida"),
  price: yup
    .number()
    .required("Digíte un precio válido")
});