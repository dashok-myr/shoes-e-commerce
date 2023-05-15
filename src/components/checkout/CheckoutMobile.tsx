import React, { useContext } from 'react'
import { CartItemsContext } from '@/context/cartItems.context'
import Image from 'next/image'
import getPriceAfterDiscount from '@/utils/getPriceAfterDiscount'
import trashIcon from '@/images/icon-delete.svg'

export default function CheckoutMobile() {
  const {
    cartItems,
    increaseItemsAmount,
    decreaseItemsAmount,
    removeCartItem,
    totalPrice,
  } = useContext(CartItemsContext)
  return (
    <div className="flex flex-col gap-8 p-8">
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id} className="flex gap-4 text-gray-500 text-xl">
            <div>
              <Image
                width={416}
                height={416}
                className="w-40 h-40 object-contain16 rounded-lg "
                src={cartItem.images[0]}
                alt="mama"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="font-semibold text-dark-grayish-blue">
                ${getPriceAfterDiscount(cartItem)}
              </div>
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
              <div className="flex self-end">
                <button onClick={() => removeCartItem(cartItem)}>
                  <Image src={trashIcon} alt="cartIcon" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="flex flex-col self-end">
        <div className="py-6 text-xl">TOTAL: ${totalPrice}</div>
      </div>
    </div>
  )
}
