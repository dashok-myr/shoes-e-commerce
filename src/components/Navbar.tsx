import React from 'react'

import cart from '../images/icon-cart.svg'
import Image from 'next/image'
import Avatar from '../images/image-avatar.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="container py-8 m-auto font-sans px-10 ">
      <div className="flex justify-between items-center w-full border-b-2 pb-6">
        <div className="font-sans text-2xl font-bold">sneakers</div>
        <div className="container flex flex-wrap items-center justify-start mx-auto text-sm text-grayish-blue pl-10">
          <Link href="/" className="pr-8">
            Collections
          </Link>

          <Link href="/" className="pr-8">
            Men
          </Link>
          <Link href="/" className="pr-8">
            Women
          </Link>
          <Link href="/" className="pr-8">
            About
          </Link>
          <Link href="/" className="pr-8">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <Image
            className="w-full h-full object-none pr-6"
            src={cart}
            alt="cartIcon"
          />
          <Image
            className="w-10 h-10 rounded-full"
            src={Avatar}
            alt="Rounded avatar"
          />
        </div>
      </div>
    </div>
  )
}
