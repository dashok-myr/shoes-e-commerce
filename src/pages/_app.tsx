import React from 'react'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { CartItemsProvider } from '@/context/cartItems.context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartItemsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartItemsProvider>
  )
}
