import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

import theme from "../styles/theme";
import Layout from "../components/layout";
import { AuthProvider } from "@/context/auth";
import { Provider } from "react-redux";
import store from "@/redux/store";




const MyApp: React.FC<AppProps> = (props: AppProps) => {
  const {
    Component,
    pageProps,
  }: { Component: any; pageProps: any } = props
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <AuthProvider>
        <SessionProvider
          session={pageProps.session}
        >
          <Layout>
                <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </AuthProvider>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
