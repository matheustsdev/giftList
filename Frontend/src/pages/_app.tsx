import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals'; 

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}