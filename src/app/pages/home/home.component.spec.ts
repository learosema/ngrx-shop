import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductState } from '../../state/product.state';
import { selectProducts } from '../../state/product.selectors';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]),
        provideMockStore<ProductState>({
          initialState: {products: [], loading: false},
          selectors: [
            {selector: selectProducts, value: []}
          ]
        }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
