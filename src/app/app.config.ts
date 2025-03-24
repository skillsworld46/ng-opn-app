import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Theme from '@primeng/themes/aura'

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Theme,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.my-app-dark',
                    cssLayer: {
                        name: 'primeng',
                        order: 'app-styles, primeng'
                    }
                }
            },
            ripple: true
        }), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),]
};
