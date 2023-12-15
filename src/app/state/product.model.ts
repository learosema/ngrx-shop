export interface Product {
  id: string;
  name: string;
  extras: string[];
  price: number;
  rating: {
    score: number;
    votes: number;
  }
}
