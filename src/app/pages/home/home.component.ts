import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading, selectProducts } from '../../state/product.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { productActions } from '../../state/product.actions';
import { PricePipe } from '../../pipes/price.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PricePipe, RouterLink, RouterLinkActive],
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

  ngOnInit(): void {

  }

}

