import { supabase } from "@/utils/supabaseClient";
import { createContext, useContext} from "react";
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

  const login = async ({ email, password }: User) => {
    console.log(email, password);
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password
    })
    error ? console.log(error) : console.log(user);
    const loginUser = supabase.auth.user();
    loginUser ? window.location.href = "/" : null;
  };
  const signUp = async ({ email, password }: User) => {
    console.log(email, password);
    const { error } = await supabase.auth.signUp(
      {
        email,
        password
      },
    )
    if (error) throw error;
    alert("Check your email for the login link!");
  };

  return <Provider value={{ login,signUp }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};