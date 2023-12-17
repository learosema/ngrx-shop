import { Injectable, inject } from "@angular/core";
import { RestaurantService } from "../services/restaurant.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { productActions } from "./product.actions";
import { exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductEffects {
  private _restaurantService = inject(RestaurantService);
  private _actions$ = inject(Actions);

  loadProducts$ = createEffect(() => this._actions$.pipe(
    ofType('[Product] Load Products'),
    tap((...debug: any[]) => console.log(debug)),
    switchMap(({offset, limit}) => this._restaurantService.getProducts(offset, limit).pipe(
      map((products: Product[]) => {
        return productActions.retrievedProducts({products});
      })
    ))
  ));
}
