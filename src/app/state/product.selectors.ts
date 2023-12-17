import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";

export const productStateSelector = createFeatureSelector<ProductState>('product');
export const selectProducts = createSelector(productStateSelector, (state) => state.products);
export const selectLoading = createSelector(productStateSelector, (state) => state.loading);
