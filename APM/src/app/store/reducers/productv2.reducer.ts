import { Product } from 'src/app/products/product';
import * as ProductActions from "../actions/productv2.actions";




export interface State {
  showProductCode: boolean;
  products: Product[],
  currentProductId: number,
  currentProduct: Product | null,
  error: string
};

const initialState: State = {
  showProductCode: true,
  products: [],
  currentProductId: 0,
  currentProduct: null,
  error: ''
};


export function reducer(state = initialState, action: any): State {
  switch (action.type) {

    case ProductActions.ProductionActionsType.INITIALIZE_PRODUCT: {
      return initialiseProduct(state, action);
    }

    case ProductActions.ProductionActionsType.LOAD_PRODUCT_SUCCESS: {
      return loadProductsSucess(state, action);
    }

    case ProductActions.ProductionActionsType.LOAD_PRODUCT_FAILURE: {
      return loadProductsFailure(state, action);
    }

    case ProductActions.ProductionActionsType.LOAD_PRODUCT_SUCCESS: {
      return loadProductsSucess(state, action);
    }

    case ProductActions.ProductionActionsType.SET_CURRENT_PRODUCT: {
      return setCurrentProduct(state, action);
    }

    case ProductActions.ProductionActionsType.UPDATE_PRODUCT_SUCCESS: {
      return updateProductSuccess(state, action);
    }

    case ProductActions.ProductionActionsType.UPDATE_PRODUCT_FAILURE: {
      return updateProductFailure(state, action);
    }

    case ProductActions.ProductionActionsType.CREATE_PRODUCT_SUCCESS: {
      return createProductSuccess(state, action);
    }

    case ProductActions.ProductionActionsType.CREATE_PRODUCT_FAILURE: {
      return createProductFailure(state, action);
    }

    default: {
      return state;
    }

  }
}

function loadProductsSucess(state: State, action: ProductActions.LoadProductSuccessAction): State {
  return {
    ...state,
    products: action.payload,
    currentProduct: action.payload[0],
    currentProductId: action.payload[0].id,
    error:''
  }
}

function loadProductsFailure(state: State, action: ProductActions.LoadProductFailure): State {
  return {
    ...state,
    error: action.payload
  }
}

function updateProductSuccess(state: State, action: ProductActions.CreateProductSucess): State {
  const newProducts = state.products.map(
    item => item.id ===  action.payload.id ? action.payload : item)

  return {
    ...state,
     products: newProducts
  }
}

function updateProductFailure(state: State, action: ProductActions.CreateProductSucess): State {
  const newProducts = {...state.products, ...action.payload}
  return {
    ...state,
     products: newProducts
  }
}

function createProductSuccess(state: State, action: ProductActions.CreateProductSucess): State {
  const newProducts = [...state.products, action.payload]
  return {
    ...state,
     products: newProducts,
     currentProduct: action.payload,
     currentProductId: action.payload.id,
     error:''
  }
}

function createProductFailure(state: State, action: ProductActions.CreateProducFailure): State {
  return {
    ...state,
     error: action.payload
  }
}

function setCurrentProduct(state: State, action: ProductActions.SetCurrentProduct): State {
  return{
    ...state,
      currentProductId: action.payload.currentPoructId,
      currentProduct: state.products.find(p => p.id === action.payload.currentPoructId)

  }
}

function initialiseProduct(state: State, action: ProductActions.InitilaizeProduct): State {
  return{
    ...state,
    currentProduct: {description:'', id: 0, productCode: '', productName: '', starRating: 0},
  }
}


