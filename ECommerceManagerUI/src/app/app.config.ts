import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from "src/app/interceptors/loading-interceptor";
import { netErrorHandlerInterceptor } from "src/app/interceptors/net-error-handler-interceptor";
import { authenticationInterceptor } from "src/app/interceptors/authentification-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideToastr({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor,
        authenticationInterceptor,
        netErrorHandlerInterceptor,
      ])
    ),
  ],
};
