import type { AppProps } from 'next/app'
import NextJSProgress from '../utils/NextJSProgress'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/Apollo'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextJSProgress />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
