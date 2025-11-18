import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {reducers} from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import {ProductsEffects} from './store/effects/products.effects';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(reducers, {}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(ProductsEffects)
]
};
