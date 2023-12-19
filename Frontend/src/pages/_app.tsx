import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globals'; 
import { theme } from '@/styles/theme';

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}