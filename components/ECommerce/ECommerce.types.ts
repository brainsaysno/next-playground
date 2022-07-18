export interface Color {
  name: string,
  hex: string
}

export interface Product {
  title: string,
  usdPrice: number,
  designer: string,
  collection: string,
  tags: string[],
  colors: Color[],
  sizes: number[],
  stock: number,
  description: string
}