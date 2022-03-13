import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/products/product.service';
import * as ProductActions from '../actions/productv2.actions';



@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions,
    private productService: ProductService) { }


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActions.ProductionActionsType.LOAD_PRODUCTS),
    switchMap(() => this.productService.getProducts().pipe(
      map(products => new ProductActions.LoadProductSuccessAction(products)),
      catchError(error => of(new ProductActions.LoadProductFailure(error)))
    ))
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
      ofType(ProductActions.ProductionActionsType.UPDATE_PRODUCT),
      switchMap((action: ProductActions.UpdateProduct) => this.productService.updateProduct(action.payload)
        .pipe(
          tap(pr => console.log('tap' + JSON.stringify(pr))),
          map(product => {
            console.log('here !');
            return new ProductActions.UpdateProductSuccess(product);
          }),
          catchError(error => of(new ProductActions.UpdateProductFailure(error)))
        )
      ));

  @Effect()
  createProduct$ = this.actions$.pipe(
      ofType(ProductActions.ProductionActionsType.CREATE_PRODUCT),
      switchMap((action: ProductActions.CreateProduct) => this.productService.createProduct(action.payload)
        .pipe(
          tap(pr => console.log('tap' + JSON.stringify(pr))),
          map(product => new ProductActions.CreateProductSucess(product)),
          catchError(error => of(new ProductActions.CreateProducFailure(error)))
        )
      ));




}
