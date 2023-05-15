import React from 'react'
import { IProduct } from '@/types/ICartItems'

interface PriceProps {
  collection: string
  product: IProduct
}
export default function ProductInfo({ collection, product }: PriceProps) {
  return (
    <>
      <div className="pb-4 text-orange font-bold">{collection}</div>
      <div className="pb-4 text-3xl font-semibold ">{product.name}</div>
      <div className="pb-4 text-grayish-blue">{product.description}</div>
    </>
  )
}
