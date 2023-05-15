import React, { useContext, useState } from 'react'
import { CartItemsContext } from '@/context/cartItems.context'
import { SHOP_DATA } from '../../../shop-data'
import Carousel from '@/components/Carousel'
import Price from '@/components/product/shared/Price'
import ProductInfo from '@/components/product/shared/ProductInfo'
import AddButton from '@/components/product/shared/AddButton'
import IncrementDecreaseButtons from '@/components/product/shared/IncrementDecreaseButtons'

interface ProductMobileProps {
  productId: string | string[]
}
export default function ProductMobile({ productId }: ProductMobileProps) {
  const { addCartItems } = useContext(CartItemsContext)
  const [amount, setAmount] = useState<number>(1)

  const product = SHOP_DATA.find((item) => {
    return item.id === +productId
  })

  if (!productId || !product) return null

  return (
    <div className="flex justify-center items-center w-full h-full mx-0 ">
      <div className="flex flex-col justify-between">
        <Carousel
          images={product.images}
          showStatus={false}
          showThumbs={false}
        />
        <div className="flex flex-col flex-1 self-center max-h-96 p-6">
          <ProductInfo product={product} collection="SNEAKERS COMPANY" />
          <Price product={product} />
          <div className="flex flex-col py-6">
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
