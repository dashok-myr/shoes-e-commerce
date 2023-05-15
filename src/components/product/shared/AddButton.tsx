import Image from 'next/image'
import whiteCart from '@/images/icon-cart-white.svg'
import React from 'react'

interface addButtonProps {
  onClick: () => void
}
export default function AddButton({ onClick }: addButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-white text-base px-12 py-2 bg-orange rounded-lg focus:outline-none bg-orange active:ring-4 active:ring-red-300"
    >
      <div className="flex items-center place-content-center">
        <Image src={whiteCart} alt="cartIcon" />
        <span className="ml-2">Add to cart</span>
      </div>
    </button>
  )
}
