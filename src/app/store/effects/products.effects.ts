import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductsService} from '../../api/services';
import {ProductsActions} from '../actions/products.actions';
import {catchError, exhaustMap, of} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class ProductsEffects {

  private actions$: Actions = inject(Actions);
  private productService = inject(ProductsService);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.productsLoad),
      exhaustMap(action=> this.productService.getAllProducts()
        .pipe(
          map(response => ProductsActions.productsSuccess({products: response})),
          catchError(err => of(ProductsActions.productsFailure({error: err})))
        ))
    )
  })
}
