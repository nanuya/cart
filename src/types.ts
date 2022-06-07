export type Rating = {
  rate: number;
  count: number;
}

export type Product = {
  id: number,
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Rating;
}
