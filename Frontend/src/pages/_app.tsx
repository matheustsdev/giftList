import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globals'; 
import { theme } from '@/styles/theme';
import { inter } from '@/app/fonts';

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={inter.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}