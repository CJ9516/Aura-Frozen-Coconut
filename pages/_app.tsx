import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aura Frozen Coconut — Freshness Preserved</title>
        <meta name="description" content="Freshly grated Sri Lankan coconuts frozen at peak freshness." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aura Frozen Coconut" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
