import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { cutEmails } from "@/utils/cutEmails";

const useUserAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (email: string, password: string, firstname: string, lastname: string) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstname,
          lastname
        }
      }
    });

    if (error) {
      console.log(error.message);
    }

    if (data) {
      toast.info("El usuario ha sido creado con exito");
      navigate("/login");
    }

    setIsLoading(false);
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Hubo un error, vuelva a intentarlo.");
      return;
    }

    if (data) {
      navigate("/");
      setIsLoading(false);
      const welcomeUser = cutEmails(data?.user?.email || "");
      toast.success(`Bienvenido, ${welcomeUser}`);
    }
  };

  return { handleRegister, handleLogin, isLoading };
};

export default useUserAuth;
