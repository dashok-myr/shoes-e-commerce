import React, { useContext, useState } from 'react'
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Logo from '../images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'
import useIsMobile from '@/utils/useIsMobile'
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react'

import CartPopoverCard from '@/components/cartPopover/CartPopoverCard'
import { CartItemsContext } from '@/context/cartItems.context'
import { ICartItem } from '@/types/ICartItems'

function getTotalAmountOfCartItems(cartItems: ICartItem[]) {
  return cartItems.reduce((accu, nextCartItem) => {
    return accu + nextCartItem.amount
  }, 0)
}

export default function Navbar() {
  const { cartItems } = useContext(CartItemsContext)

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {isMobile && <MobileMenu />}
        <Image
          className="w-28 md:w-40 h-5"
          width="112"
          src={Logo}
          alt="Rounded avatar"
        />
      </div>
      <div className="hidden md:flex md:flex-row justify-start w-full text-grayish-blue pl-8">
        <Link href="/" className="py-2 pr-8 block">
          Collection
        </Link>
        <Link href="/" className="py-2 pr-8 block cursor-auto">
          Men
        </Link>
        <Link href="/" className="py-2 pr-8 block cursor-auto">
          Women
        </Link>
        <Link href="/" className="py-2 pr-8 block cursor-auto">
          About
        </Link>
        <Link href="/" className="py-2 pr-8 block cursor-auto">
          Contact
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <Popover
          placement="bottom-end"
          open={isPopoverOpen}
          handler={() => {
            setIsPopoverOpen(!isPopoverOpen)
          }}
        >
          <PopoverHandler>
            <button className="relative">
              {cartItems.length > 0 && (
                <div className="absolute rounded-full bg-orange w-4 h-4 top-2 left-4 text-white text-xs">
                  {getTotalAmountOfCartItems(cartItems)}
                </div>
              )}
              <Image
                className="w-16 h-12 object-none pr-6"
                src={Cart}
                alt="cartIcon"
              />
            </button>
          </PopoverHandler>
          <PopoverContent>
            <CartPopoverCard
              isPopoverOpen={isPopoverOpen}
              setIsPopoverOpen={setIsPopoverOpen}
            />
          </PopoverContent>
        </Popover>

        <Image
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          src={Avatar}
          alt="Rounded avatar"
        />
      </div>
    </div>
  )
}
