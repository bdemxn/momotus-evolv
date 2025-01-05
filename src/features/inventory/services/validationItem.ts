import * as yup from "yup";

export const validationItem = yup.object({
  itemName: yup
    .string()
    .required(),
  category: yup
    .string()
    .required(),
  currency: yup
    .string()
    .required(),
  quantity: yup
    .number()
    .required(),
  price: yup
    .number()
    .required()
});