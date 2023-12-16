import { Product } from "./product.model";

export interface ProductState {
  loading: boolean;
  products: ReadonlyArray<Product>;
}
