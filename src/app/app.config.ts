import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
  ],
};
