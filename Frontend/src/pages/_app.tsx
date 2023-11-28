import { Theme } from '@/libraries/radix';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
 
export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <Theme appearance="dark" accentColor="grass" grayColor="sand" radius="large">
        <Component {...pageProps} />
    </Theme>

  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}