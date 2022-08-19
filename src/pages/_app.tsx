import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

import theme from "../styles/theme";
import Layout from "../components/layout";
import { AuthProvider } from "@/context/auth";


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={pageProps.session}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
