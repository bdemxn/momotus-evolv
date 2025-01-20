import { createContext } from "react";
import { AuthContextProps } from "@/types/auth.interface";

export const AuthContext = createContext<AuthContextProps | null>(null);