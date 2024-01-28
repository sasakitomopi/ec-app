// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ProductType = {
  id: number
  title: string
  price: number
  content: string
  thumbnail: { url: string }
  createdAt: string
  updatedAt: string
  tag: []
}

export type { ProductType }
