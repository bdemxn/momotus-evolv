import { Session, User } from "@supabase/supabase-js";

export interface AuthContextProps {
  user: User | null;
  signOut: () => Promise<void>;
  isLoading: boolean;
  session: Session | null;
}