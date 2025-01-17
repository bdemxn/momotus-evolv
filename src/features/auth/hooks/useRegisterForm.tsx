import { useFormik } from "formik";
import { registerUser } from "../services/registerUser";

const useRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      firstname: "",
      lastname: ""
    },
    onSubmit: (values) => registerUser(values),
  });

  return { formik };
};

export default useRegisterForm;
