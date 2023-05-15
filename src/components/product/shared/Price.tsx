import getPriceAfterDiscount from '@/utils/getPriceAfterDiscount'
import React from 'react'
import { IProduct } from '@/types/ICartItems'

interface PriceProps {
  product: IProduct
}
export default function Price({ product }: PriceProps) {
  if (product.discount) {
    return (
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="text-2xl font-semibold mr-4">
            ${getPriceAfterDiscount(product)}
          </div>
          <div className="text-orange font-bold px-2 py-1 bg-pale-orange rounded-lg">
            {product.discount}%
          </div>
        </div>
        <div className="text-sm text-grayish-blue line-through">
          ${product.price}
        </div>
      </div>
    )
  }

  return <div className="text-2xl font-semibold">${product.price}</div>
}
