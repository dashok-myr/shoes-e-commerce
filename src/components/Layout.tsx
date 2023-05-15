import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="font-sans tracking-wide">
      <div className="flex flex-col">
        <div className="flex flex-col w-full md:container md:m-auto p-4 md:p-6">
          <Navbar />
          <span className="hidden sm:block h-0.5 w-full bg-gray-200 mt-4"></span>
        </div>
        <div className="md:mt-6" />
        <div className="">{children}</div>
      </div>
    </div>
  )
}
