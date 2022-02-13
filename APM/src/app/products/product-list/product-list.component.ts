import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { ProductState } from 'src/app/store/reducers/product.reducer';

import { Product } from '../product';
import { ProductService } from '../product.service';
import * as ProductActions from '../../store/actions/product.actions';
import { getCurrentProduct, getProducts, getShowProductCode } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode$: Observable<boolean>;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product | null>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {

    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.displayCode$ = this.store.select(getShowProductCode);
  }



  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }))
  }

}
