import { supabase } from "@/utils/supabaseClient";
import { createContext, useContext, useEffect, useState } from "react";
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
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const login = async ({ email, password }: User) => {
    console.log(email, password);
    if (email && password) {
      localStorage.setItem("auth", "abcdef");
      localStorage.setItem("user", JSON.stringify({ email }));
     window.location.href = "/";
    } else {
      console.log("error");
      alert("Invalid email or password");
    }
  };
  const signUp = async ({ email, password }: User) => {
    console.log(email, password);
    const { error } = await supabase.auth.signIn({ email });
    if (error) throw error;
    alert("Check your email for the login link!");

    // if (email && password) {
    //   localStorage.setItem("auth", "abcdef");
    //   localStorage.setItem("user", JSON.stringify({ email }));
    //  window.location.href = "/";
    // } else {
    //   console.log("error");
    //   alert("user with this email already created");
    // }
  };

  const getUser = () => {
    if(typeof window !== "undefined") {
     if (localStorage.getItem("user")) {
      const data = localStorage.getItem("user") || '{}';
      const parsedUser = JSON.parse(data);
      return parsedUser.email;
    }
    return "";
   }
  };

  return <Provider value={{ logout, login, isLoggedIn,getUser,signUp }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};