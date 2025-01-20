import React, { useEffect, useState } from "react";
import { supabase } from "@/features/auth/services/supabaseClient";
import { Session, User } from "@supabase/supabase-js";
import { LayoutProps } from "@/types/layout.props";
import { AuthContext } from "@/context/auth-context";

export const UserAuthProvider: React.FC<LayoutProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session onAuthStateChange: ", session);
      setSession(session);
      setUser(session?.user || null);
      setIsLoading(false);
    });

    return () => data?.subscription?.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signOut, isLoading, session }}>
      {children}
    </AuthContext.Provider>
  );
};
