
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/products/product.service';
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions,
    private productService: ProductService) { }


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() => this.productService.getProducts().pipe(
      map(products => ProductActions.loadProductsSuccess({ products })),
      catchError(error => of(ProductActions.loadProductFailure({ error })))
    ))
  );

  @Effect()
  updateProduct$ =
    this.actions$
      .pipe(
        ofType(ProductActions.updateProduct),
        switchMap(action => this.productService.updateProduct(action.product)
          .pipe(
            tap(pr => console.log('tap' + JSON.stringify(pr))),
            map(product => ProductActions.updateProductSuccess({ product })),
            catchError(error => of(ProductActions.upateProductFailure({ error })))
          )
        ));

  @Effect()
  createProduct$ =
    this.actions$
      .pipe(
        ofType(ProductActions.updateProduct),
        switchMap(action => this.productService.createProduct(action.product)
          .pipe(
            tap(pr => console.log('tap' + JSON.stringify(pr))),
            map(product => ProductActions.createProductSuccess({ product })),
            catchError(error => of(ProductActions.createProductFailure({ error })))
          )
        ));





}
