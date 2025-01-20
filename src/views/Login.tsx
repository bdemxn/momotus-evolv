import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/features/auth/components/login-form";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="md:w-[500px] mx-auto font-inter">
      <Card className="mt-[30%]">
        <CardHeader>
          <CardTitle className="text-2xl">Bienvenido</CardTitle>
          <CardDescription>
            Pon tus credenciales para poder acceder a tu POS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <hr className="my-4 dark:opacity-20" />
          <NavLink
            to="/register"
            className="text-xs font-semibold flex justify-end gap-x-1"
          >
            ¿No tienes cuenta aún?
            <span className="underline">Registrate Aquí</span>
          </NavLink>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
