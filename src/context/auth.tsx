import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";
type User = {
  email: string;
  password: string;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as any);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()

  const isLoggedIn = () => {
    return supabase.auth.session();
  };


  const login = async ({ email, password }: User) => {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password
    })
    error ? console.log(error) : console.log(user);
    const loginUser = supabase.auth.user();
    loginUser ? router.push('/') : null;
  };
  const signUp = async ({ email, password }: User) => {
    const { error } = await supabase.auth.signUp(
      {
        email,
        password
      },
    )
    if (error) throw error;
    alert("Check your email for the login link!");
  };

  return <Provider value={{ login, signUp, isLoggedIn }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};