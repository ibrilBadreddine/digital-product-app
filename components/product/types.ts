export interface Product {
  id: string,
  name: string,
  price: number,
  images: Image[],
  created_at: string,
}

export interface Image {
  id: string,
  name: string,
  url: string,
}
