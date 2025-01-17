import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(UiLibraryAngularModule.forRoot()),
  ],
};
