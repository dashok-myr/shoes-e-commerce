import Image from 'next/image'
import getPriceAfterDiscount from '@/utils/getPriceAfterDiscount'
import trashIcon from '@/images/icon-delete.svg'
import React, { Fragment, useContext } from 'react'
import { CartItemsContext } from '@/context/cartItems.context'

export default function CheckoutDesktop() {
  const {
    cartItems,
    increaseItemsAmount,
    decreaseItemsAmount,
    removeCartItem,
    totalPrice,
  } = useContext(CartItemsContext)

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 gap-4 justify-items-center items-center text-gray-500 border-b-2 pb-2 text-sm">
          <div>Product</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Remove</div>
        </div>
        <div className="grid grid-cols-5 gap-4 justify-items-center items-center text-gray-500 py-6 border-b-2 overflow-y-auto h-96">
          {cartItems.map((cartItem) => {
            return (
              <Fragment key={cartItem.id}>
                <Image
                  width={416}
                  height={416}
                  className="w-44 h-44 object-contain16 rounded-lg "
                  src={cartItem.images[0]}
                  alt="mama"
                />
                <div>{cartItem.name}</div>
                <div>
                  <button
                    onClick={() => decreaseItemsAmount(cartItem)}
                    className="font-bold pr-1"
                  >{`<`}</button>
                  {cartItem.amount}
                  <button
                    onClick={() => increaseItemsAmount(cartItem)}
                    className="font-bold pl-1"
                  >{`>`}</button>
                </div>
                <div>${getPriceAfterDiscount(cartItem)}</div>
                <button onClick={() => removeCartItem(cartItem)}>
                  <Image src={trashIcon} alt="cartIcon" />
                </button>
              </Fragment>
            )
          })}
        </div>
        <div className="flex flex-col self-end">
          <div className="py-6 text-xl">TOTAL: ${totalPrice}</div>
        </div>
      </div>
    </div>
  )
}
