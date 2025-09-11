import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductsActions} from '../../store/actions/products.actions';
import {productsFeatureKey} from '../../store/reducers/products/products.reducer';
import {AsyncPipe} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  private store = inject(Store)
  products$ = this.store.select(productsFeatureKey)
  ngOnInit() {
    this.store.dispatch(ProductsActions.productsLoad())
  }
}
