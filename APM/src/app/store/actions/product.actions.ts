import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products/product";

export const toggleProductCode = createAction(
  '[Product Page] toggle product page'
);

export const setCurrentProduct = createAction(
  '[Product API] get current product',
  props<{ currentProductId: number }>()
);

export const loadProducts = createAction(
  '[Product API] load product'
);

export const loadProductsSuccess = createAction(
  '[Product API] load product success',
  props<{ products: Product[] }>()
);


export const loadProductFailure = createAction(
  '[Product API] load product failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product API] product update',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product API] product updated successfully',
  props<{ product: Product }>()
);

export const upateProductFailure = createAction(
  '[Product API] product updated successfully',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[Product API] create product',
  props<{ product : Product }>()
);

export const createProductSuccess =createAction(
  '[Product API] create product',
   props<{ product : Product }>()
);


export const createProductFailure =createAction(
  '[Product API] create product',
   props<{ error : string }>()
);
