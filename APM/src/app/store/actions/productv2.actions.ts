import { Action } from "@ngrx/store";
import { Product } from "src/app/products/product";

export const ProductionActionsType = {
   INITIALIZE_PRODUCT: '[Product API] New Product',
   LOAD_PRODUCTS: '[Product API] Load Product',
   LOAD_PRODUCT_SUCCESS: '[Product API] Load Product Success',
   LOAD_PRODUCT_FAILURE: '[Product API] Load Product Failure',
   TOGGLE_PRODUCT_CODE: '[Product Page] toggle product page',
   SET_CURRENT_PRODUCT: '[Product API] get current product',
   UPDATE_PRODUCT: '[Product API] Product Update',
   UPDATE_PRODUCT_SUCCESS: '[Product API] Product Update Success',
   UPDATE_PRODUCT_FAILURE: '[Product API] Product Update Failure',
   CREATE_PRODUCT: '[Product API] create product',
   CREATE_PRODUCT_SUCCESS: '[Product API] create product Sucess',
   CREATE_PRODUCT_FAILURE: '[Product API] create product Failure'

}

export class InitilaizeProduct implements Action {
  readonly type = ProductionActionsType.INITIALIZE_PRODUCT;
}

export class ToggleProductCode implements Action {
  readonly type = ProductionActionsType.TOGGLE_PRODUCT_CODE;
}

export class SetCurrentProduct implements Action {
 readonly type = ProductionActionsType.SET_CURRENT_PRODUCT;
 constructor(public payload: { currentPoructId : number}) {}
}

export class LoadProducts implements Action {
  readonly type = ProductionActionsType.LOAD_PRODUCTS;
}

export class LoadProductSuccessAction implements Action {
  readonly type = ProductionActionsType.LOAD_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductFailure implements Action {
  readonly type = ProductionActionsType.LOAD_PRODUCT_FAILURE;
  constructor(public payload : string) {}
}

export class UpdateProduct  {
 readonly type = ProductionActionsType.UPDATE_PRODUCT;
 constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductionActionsType.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProductFailure  implements Action {
  readonly type = ProductionActionsType.UPDATE_PRODUCT_FAILURE;
  constructor(public payload: string) {}
}

export class CreateProduct implements Action {
  readonly type = ProductionActionsType.CREATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class CreateProductSucess implements Action {
  readonly type = ProductionActionsType.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class CreateProducFailure implements Action {
  readonly type = ProductionActionsType.CREATE_PRODUCT_FAILURE;
  constructor(public payload: string) {}
}

export type ProductActions =
 InitilaizeProduct
| LoadProducts
| LoadProductSuccessAction
| LoadProductFailure
| ToggleProductCode
| SetCurrentProduct
| UpdateProduct
| UpdateProductSuccess
| UpdateProductFailure
| CreateProduct
| CreateProductSucess
| CreateProducFailure ;
