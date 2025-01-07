import * as yup from "yup";

export const validationUserLogin = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});