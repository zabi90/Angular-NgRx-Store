import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Product} from '../../api/models/product';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Products Load': emptyProps(),
    'Products Success': props<{ products: Product[] }>(),
    'Products Failure': props<{ error: unknown }>(),
  }
});
