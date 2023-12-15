import { Product } from "./product.model";

export interface Restaurant {
  id: string;
  name: string;
  products: Product[];
};
