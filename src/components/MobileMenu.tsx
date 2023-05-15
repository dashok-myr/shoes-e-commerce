import React, { useState } from 'react'
import Link from 'next/link'
import Closed from '@/images/icon-close.svg'
import Image from 'next/image'
import Menu from '@/images/icon-menu.svg'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(true)
        }}
        type="button"
        className="inline-flex items-center px-2 pt-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <Image src={Menu} alt="menu" />
      </button>

      {isMenuOpen && (
        <div className="relative">
          <div className="flex flex-col gap-8 block fixed top-0 left-0 w-1/2 h-full pl-6 overflow-y-auto py-8 bg-white z-10 font-semibold text-very-dark-blue">
            <div>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                <Image src={Closed} alt="menu" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/" className="block">
                Collection
              </Link>
              <Link href="/" className="block">
                Men
              </Link>
              <Link href="/" className="block">
                Women
              </Link>
              <Link href="/" className="block">
                About
              </Link>
              <Link href="/" className="block">
                Contact
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </>
  )
}
