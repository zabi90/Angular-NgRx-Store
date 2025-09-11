import {ActionReducerMap} from '@ngrx/store';
import {productsFeatureKey, ProductsState, productsReducer} from './products/products.reducer';

export interface State{
  [productsFeatureKey]: ProductsState
}

export const reducers : ActionReducerMap<State> ={
  [productsFeatureKey]: productsReducer,
}
