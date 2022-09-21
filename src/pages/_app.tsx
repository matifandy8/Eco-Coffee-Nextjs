import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

import theme from "../styles/theme";
import Layout from "../components/layout";
import { AuthProvider } from "@/context/auth";
import { NextPage } from "next";
import { AuthGuard } from "@/components/authGuard";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
}


const MyApp: React.FC<AppProps> = (props: AppProps) => {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SessionProvider
          session={pageProps.session}
        >
          <Layout>
            {/* if requireAuth property is present - protect the page */}
            {Component.requireAuth ? (
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            ) : (
              // public page
              <Component {...pageProps} />
            )}
          </Layout>
        </SessionProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
