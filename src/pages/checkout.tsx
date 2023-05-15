import React, { useContext } from 'react'
import { CartItemsContext } from '@/context/cartItems.context'
import EmptyCheckout from '@/components/checkout/EmptyCheckout'
import useIsMobile from '@/utils/useIsMobile'
import CheckoutMobile from '@/components/checkout/CheckoutMobile'
import CheckoutDesktop from '@/components/checkout/CheckoutDesktop'

export default function Checkout() {
  const { cartItems } = useContext(CartItemsContext)

  const isMobile = useIsMobile()

  if (!cartItems.length) {
    return <EmptyCheckout />
  }

  return <>{isMobile ? <CheckoutMobile /> : <CheckoutDesktop />}</>
}
