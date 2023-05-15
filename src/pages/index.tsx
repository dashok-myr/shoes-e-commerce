import React from 'react'
import { SHOP_DATA } from '../../shop-data'
import Link from 'next/link'

export default function Collection() {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row justify-center item-center text-2xl py-10">
        SHOP ALL NEW ARRIVALS
      </div>
      <div className="grid grid-cols-1 md:grid md:grid-cols-4 md:gap-6">
        {SHOP_DATA.map((item) => {
          const { id, name, images, price } = item

          return (
            <div key={id} className="flex flex-col">
              <Link
                href={`/product/${id}`}
                className="group flex flex-col justify-end h-96 bg-cover bg-center bg-no-repeat justify-between"
                style={{
                  justifyContent: 'end',
                  backgroundImage: `url('${images[0]}')`,
                }}
              ></Link>
              <div className="flex justify-between pb-4 text-dark-grayish-blue">
                <div>{name}</div>
                <div>$ {price}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
