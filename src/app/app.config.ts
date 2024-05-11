import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
  ],
};
