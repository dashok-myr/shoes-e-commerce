import Image from 'next/image'
import clsx from 'clsx'
import React, { useContext, useState } from 'react'
import { SHOP_DATA } from '../../../shop-data'
import { CartItemsContext } from '@/context/cartItems.context'
import Price from '@/components/product/shared/Price'
import ProductInfo from '@/components/product/shared/ProductInfo'
import AddButton from '@/components/product/shared/AddButton'
import IncrementDecreaseButtons from '@/components/product/shared/IncrementDecreaseButtons'

interface ProductDesktopProps {
  productId: string | string[]
}

export default function ProductDesktop({ productId }: ProductDesktopProps) {
  const { addCartItems } = useContext(CartItemsContext)
  const [amount, setAmount] = useState<number>(1)
  const [activeProductIndex, setActiveProductIndex] = useState(0)

  const product = SHOP_DATA.find((item) => {
    return item.id === +productId
  })

  if (!productId || !product) return null

  const mainImage = product.images[activeProductIndex]

  return (
    <div className="flex justify-center items-center max-w-[70%] h-full m-auto">
      <div className="flex justify-between">
        <div className="flex flex-col flex-1 border-orange">
          <div className="flex flex-col w-96">
            <Image
              width="384"
              height="384"
              className="rounded-2xl w-96 h-96 object-cover"
              src={mainImage}
              alt="product"
            />
            <div className="flex justify-between pt-6">
              {product.images.map((image, imageIndex) => {
                return (
                  <div
                    key={`${product.id}-${imageIndex}}`}
                    className={clsx(
                      {
                        'ring-2 ring-orange': activeProductIndex === imageIndex,
                      },
                      'rounded-xl'
                    )}
                  >
                    <button
                      className={clsx({
                        'opacity-30': activeProductIndex === imageIndex,
                      })}
                      key={imageIndex}
                      onClick={() => {
                        setActiveProductIndex(imageIndex)
                      }}
                    >
                      <Image
                        width="80"
                        height="80"
                        className="rounded-xl max-w-full w-20 h-20 object-cover object-right"
                        src={image}
                        alt="product"
                      />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="p-0 flex flex-col flex-1 self-center max-h-96">
          <ProductInfo product={product} collection="SNEAKERS COMPANY" />
          <Price product={product} />
          <div className="flex py-6">
            <IncrementDecreaseButtons
              onDecrease={() => setAmount(amount - 1)}
              onIncrement={() => setAmount(amount + 1)}
              amount={amount}
            />
            <AddButton
              onClick={() => {
                addCartItems(product, amount)
                setAmount(1)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
