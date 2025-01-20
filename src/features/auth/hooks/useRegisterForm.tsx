import { useFormik } from "formik";
import useUserAuth from "./useUserAuth";

const useRegisterForm = () => {
  const { handleRegister, isLoading: registerLoading } = useUserAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    onSubmit: (values) => handleRegister(values.email, values.password, values.firstname, values.lastname),
  });

  return { formik, registerLoading };
};

export default useRegisterForm;
