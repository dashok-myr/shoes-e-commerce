export interface IProduct {
  id: number
  name: string
  price: number
  discount: number | null
  images: string[]
  description: string
}

export interface ICartItem extends IProduct {
  amount: number
}
