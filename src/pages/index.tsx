import React from 'react'

import Image from 'next/image'
import ProductOne from '../images/image-product-1.jpg'
import whiteCart from '@/images/icon-cart-white.svg'

export default function Home() {
  return (
    <div className="text-dark-blue h-screen m-auto flex justify-center items-center max-w-[70%] h-full tracking-wide">
      <div className="flex justify-between">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col w-96 max-w-full">
            <Image className="rounded-2xl" src={ProductOne} alt="product" />
            <div className="flex justify-between pt-6">
              <Image
                className="rounded-xl w-20 max-w-full"
                src={ProductOne}
                alt="product"
              />
              <Image
                className="rounded-xl w-20 max-w-full"
                src={ProductOne}
                alt="product"
              />
              <Image
                className="rounded-xl w-20 max-w-full"
                src={ProductOne}
                alt="product"
              />
              <Image
                className="rounded-xl w-20 max-w-full"
                src={ProductOne}
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 self-center max-h-96">
          <div className="pb-4 text-orange font-bold">SNEAKERS COMPANY</div>
          <div className="pb-4 text-3xl font-semibold ">
            Fall Limited Edition Sneakers
          </div>
          <div className="pb-4 text-grayish-blue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer.
          </div>
          <div className="flex">
            <div className="text-2xl font-semibold mr-4">$125.00</div>
            <div className="flex self-center p-1 bg-pale-orange rounded-lg">
              <div className="text-orange font-bold">50%</div>
            </div>
          </div>
          <div className="text-base text-grayish-blue pb-4">$250.00</div>
          <div className="flex pb-4">
            <div className="flex pr-4">
              <button className="text-orange font-bold text-xl px-4 py-2 bg-light-grayish-blue rounded-l-lg">
                -
              </button>
              <div className="py-2 px-4 font-semibold text-xl self-center bg-light-grayish-blue">
                0
              </div>
              <button className="text-orange font-bold text-xl px-4 py-2 bg-light-grayish-blue rounded-r-lg">
                +
              </button>
            </div>
            <button className="text-white text-base px-12 py-2 bg-orange rounded-lg">
              <div className="flex">
                <Image src={whiteCart} alt="cartIcon" />
                <span className="ml-2">Add to cart</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
