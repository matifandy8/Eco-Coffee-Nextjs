import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Layout from '../components/layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp