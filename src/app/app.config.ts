import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './state/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({product: productReducer}), provideHttpClient(withFetch()), provideEffects()]
};
