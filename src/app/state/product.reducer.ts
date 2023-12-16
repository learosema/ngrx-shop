import { createReducer, on } from "@ngrx/store";
import { productActions } from "./product.actions";
import { ProductState } from "./product.state";

export const initialState: ProductState = {
  loading: false,
  products: [],
};

export const productReducer = createReducer<ProductState>(initialState,
  on(productActions.loadProducts, (state) => ({
    ...state,
    loading: true
  })),
  on(productActions.retrievedProducts, (_state, payload) => ({
    loading: false,
    products: payload.products
  }))
);
