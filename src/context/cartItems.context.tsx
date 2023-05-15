'use client'
import React, { createContext, ReactNode, useMemo } from 'react'
import { ICartItem, IProduct } from '@/types/ICartItems'
import getPriceAfterDiscount from '@/utils/getPriceAfterDiscount'
import useStateWithLocalStorage from '@/utils/useStateWithLocalStorage'

export const CartItemsContext = createContext<{
  cartItems: ICartItem[]
  increaseItemsAmount: (cartItem: ICartItem) => void
  decreaseItemsAmount: (cartItem: ICartItem) => void
  removeCartItem: (cartItem: ICartItem) => void
  addCartItems: (product: IProduct, amount: number) => void
  totalPrice: number
}>({
  cartItems: [],
  increaseItemsAmount: () => {
    return
  },
  decreaseItemsAmount: () => {
    return
  },
  removeCartItem: () => {
    return
  },
  addCartItems: () => {
    return
  },
  totalPrice: 0,
})

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useStateWithLocalStorage<ICartItem[]>(
    'cartItems',
    []
  )

  const addCartItems = (product: IProduct, amount: number) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === product.id
    })

    if (cartItemIndex === -1) {
      setCartItems([...cartItems, { ...product, amount: amount }])
      return
    }

    const cartItem = {
      ...cartItems[cartItemIndex],
      amount: cartItems[cartItemIndex].amount + amount,
    }

    const copy = [...cartItems]
    copy[cartItemIndex] = cartItem

    setCartItems(copy)
  }
  const increaseItemsAmount = (cartItem: ICartItem) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === cartItem.id
    })

    const foundCartItem = { ...cartItems[cartItemIndex] }

    foundCartItem.amount += 1
    const copy = [...cartItems]
    copy[cartItemIndex] = foundCartItem

    setCartItems(copy)
  }
  const decreaseItemsAmount = (cartItem: ICartItem) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === cartItem.id
    })

    const foundCartItem = { ...cartItems[cartItemIndex] }
    if (foundCartItem.amount === 1) {
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== cartItem.id
        })
      )
      return
    }

    foundCartItem.amount -= 1
    const copy = [...cartItems]
    copy[cartItemIndex] = foundCartItem
    setCartItems(copy)
  }

  const removeCartItem = (cartItem: ICartItem) => {
    const cartItemsAfterRemoval = cartItems.filter((item) => {
      return item.id !== cartItem.id
    })
    setCartItems(cartItemsAfterRemoval)
  }

  const totalPrice = useMemo(() => {
    let sum = 0

    for (const item of cartItems) {
      sum += +getPriceAfterDiscount(item) * item.amount
    }
    return Number(sum.toFixed(2))
  }, [cartItems])

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        increaseItemsAmount,
        decreaseItemsAmount,
        removeCartItem,
        addCartItems,
        totalPrice,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
