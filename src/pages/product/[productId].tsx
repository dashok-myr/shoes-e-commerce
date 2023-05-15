import React from 'react'
import { useRouter } from 'next/router'
import useIsMobile from '@/utils/useIsMobile'
import ProductMobile from '@/components/product/ProductMobile'
import ProductDesktop from '@/components/product/ProductDesktop'

interface CollectionProps {
  productId: string | string[]
}

function Collection({ productId }: CollectionProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <ProductMobile productId={productId} />
  }

  return <ProductDesktop productId={productId} />
}

export default function CollectionWrapper() {
  const router = useRouter()
  const { productId } = router.query

  if (!productId) return null

  return <Collection productId={productId} />
}
