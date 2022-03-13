import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromProduct from '../reducers/productv2.reducer';


export interface State {
fromProduct: fromProduct.State
}

export const reducers: ActionReducerMap<State>= {
  fromProduct: fromProduct.reducer
}

const debugMeta = (reducer: ActionReducer<any>) : ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}
 export const metaReducers: MetaReducer<State>[] = [debugMeta];
