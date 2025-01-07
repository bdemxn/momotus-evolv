import { useFormik } from "formik";
import { submitUser } from "../services/submitUser";
import { validationUserLogin } from "../services/validationUserLogin";

const useUserForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => submitUser(values),
    validationSchema: validationUserLogin
  });

  return { formik };
};

export default useUserForm;
