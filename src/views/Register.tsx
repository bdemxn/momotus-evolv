import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/features/auth/components/register-form";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="md:w-[500px] mx-auto font-inter">
      <Card className="mt-[30%]">
        <CardHeader>
          <CardTitle className="text-2xl">Registrate</CardTitle>
          <CardDescription>
            Crea un usuario para poder usar Momotus Evolv Lite
          </CardDescription>
        </CardHeader>
        <CardContent>

          <RegisterForm />
          <hr className="my-4" />
          <NavLink
            to="/login"
            className="text-xs font-semibold flex justify-end gap-x-1"
          >
            ¿Ya tienes cuenta Momotus?
            <span className="underline">Inicia Sesión Aquí</span>
          </NavLink>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
