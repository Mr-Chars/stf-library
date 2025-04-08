import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StfButtonComponent } from '../../../stf-components/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(StfButtonComponent),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
