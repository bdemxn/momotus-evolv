import * as yup from "yup";

export const validationUserRegistration = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
})