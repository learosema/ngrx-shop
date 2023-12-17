import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../state/product.model';
import { Restaurant } from '../state/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  private _http = inject(HttpClient);

  getRestaurant(): Observable<Restaurant> {
    return this._http.get<Restaurant>('/assets/restaurant.json');
  }

  getProductCount(): Observable<number> {
    return this.getRestaurant().pipe(
      map(restaurant => restaurant.products.length)
    );
  }

  getProducts(offset: number = 0, count: number = 10): Observable<Product[]> {
    return this.getRestaurant().pipe(
      map(restaurant => restaurant.products.slice(offset, offset + count))
    );
  }

  getProductById(id: string): Observable<Product|undefined> {
    return this.getRestaurant().pipe(
      map(restaurant => restaurant.products.find(p => p.id === id))
    );
  }

}
