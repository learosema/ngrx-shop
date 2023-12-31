import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading, selectProducts } from '../../state/product.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { productActions } from '../../state/product.actions';
import { PricePipe } from '../../pipes/price.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../state/product.model';
import { SlugPipe } from '../../pipes/slug.pipe';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PricePipe, SlugPipe, StarRatingComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {



  @Input()
  set page(value: number) {
    this.currentPage = value;
    this.store.dispatch(productActions.loadProducts({offset: (this.currentPage - 1) * 10, limit: 10}));
  }

  currentPage = 1;

  readonly numPages = 10; // hardcoded

  readonly pages = Array.from({length: this.numPages}, (_, i) => (i + 1));

  store = inject(Store);

  loading = toSignal(this.store.select(selectLoading));

  products = toSignal(this.store.select(selectProducts));

  currentProduct$ = new BehaviorSubject<Product|null>(null)

  currentProduct = toSignal(this.currentProduct$);

  @ViewChild('addToCartDialog') addToCartDialog: ElementRef<HTMLDialogElement> | undefined;

  ngOnInit(): void {
    // nothing here
  }


  addToCart(product: Product) {
    this.currentProduct$.next(product);
    this.addToCartDialog?.nativeElement.showModal();
  }

}
