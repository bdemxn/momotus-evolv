import { useFormik } from "formik";
import { validationUserLogin } from "../services/validationUserLogin";
import useUserAuth from "./useUserAuth";

const useUserForm = () => {
  const { handleLogin, isLoading: loginLoading } = useUserAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => handleLogin(values.email, values.password),
    validationSchema: validationUserLogin,
  });

  return { formik, loginLoading };
};

export default useUserForm;
