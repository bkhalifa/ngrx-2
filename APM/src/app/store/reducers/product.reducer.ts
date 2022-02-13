import { createReducer, on } from '@ngrx/store';
import * as AppState from '../state/app.state';
import * as ProductActions from '../actions/product.actions';
import { Product } from 'src/app/products/product';



export interface State extends AppState.State {
  products: ProductState;
};

export interface ProductState {
  showProductCode: boolean;
  products: Product[],
  currentProductId: number,
  currentProduct: Product | null,
  error: string
};

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProductId: 0,
  currentProduct: null,
  error: ''
};



export const productReducer = createReducer<ProductState>(
  initialState,

  on(ProductActions.toggleProductCode, (state) => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  }),

  on(ProductActions.setCurrentProduct, (state, action) => {
    return {
      ...state,
      currentProductId: action.currentProductId,
      currentProduct: state.products.find(p => p.id === action.currentProductId)
    }
  }),

  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      error: ''
    }
  }),

  on(ProductActions.loadProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),

  on(ProductActions.updateProductSuccess, (state, action) => {
    const updateProducts = state.products.map
      (item => action.product.id === item.id ? Object.assign({}, item, action.product) : item);
    return {
      ...state,
      products: updateProducts,
      currentProductId: action.product.id,
      error: ''
    }

  }),

  on(ProductActions.upateProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      currentProductId: 0
    }
  }),

  on(ProductActions.createProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: ''
    }

  }),

  on(ProductActions.createProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      currentProductId: 0
    }
  })


);
