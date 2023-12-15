import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { RestaurantService } from './restaurant.service';
import { firstValueFrom } from 'rxjs';
import { Restaurant } from '../state/restaurant.model';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Product } from '../state/product.model';

const TEST_PIZZA: Product = {
  id: 'bar',
  name: 'Pizza',
  extras: ['Onion'],
  price: 1499,
  rating: {
    score: 4.5,
    votes: 5542
  }
};

const TEST_DATA: Restaurant = {
  id: 'foo',
  name: "Restaurant",
  products: [TEST_PIZZA],
};


describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpTest: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(RestaurantService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get products', async () => {
    const serviceResponse = firstValueFrom(service.getProducts());
    const testRequest = httpTest.expectOne('/restaurant.json', 'expect the restaurant.json to be fetched.');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(TEST_DATA);

    expect(await serviceResponse).toEqual(TEST_DATA.products);
    httpTest.verify();
  });

  it('should be able to get a product by ID', async () => {
    const serviceResponse = firstValueFrom(service.getProductById(TEST_PIZZA.id));
    const testRequest = httpTest.expectOne('/restaurant.json', 'expect the restaurant.json to be fetched.');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(TEST_DATA);

    expect(await serviceResponse).toEqual(TEST_PIZZA);
    httpTest.verify();
  });

});
