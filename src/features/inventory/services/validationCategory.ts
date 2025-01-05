import * as yup from "yup";

export const validationCategory = yup.object({
  category: yup
    .string()
    .required("Requerido"),
})