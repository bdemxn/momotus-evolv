import { AuthContext } from "@/context/auth-context";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  return context;
};