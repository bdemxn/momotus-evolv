import { Field, Form, FormikProvider } from "formik";
import useUserForm from "../hooks/useUserForm";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const { formik } = useUserForm();

  return (
    <FormikProvider value={formik}>
      <br />
      <Form>
        <Label htmlFor="username" className="font-inter">
          Usuario
        </Label>
        <Field
          required
          id="username"
          name="username"
          placeholder="kevin.bonilla"
          className="font-inter flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
        />
        <Label htmlFor="username" className="font-inter">
          Contraseña
        </Label>
        <Field
          type="password"
          required
          id="password"
          name="password"
          placeholder="Digíte su contraseña"
          className="font-inter flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
        />

        <div className="mt-3">
          <Button type="submit" className="flex w-full">
            Iniciar Sesión
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;