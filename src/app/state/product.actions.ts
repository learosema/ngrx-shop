import { createActionGroup, props } from "@ngrx/store";
import { Product } from "./product.model";

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': props<{offset: number; limit: number }>(),
    'Retrieved Products': props<{products: ReadonlyArray<Product>}>(),
  }
});
