import { EnvironmentProviders, Provider } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  ActivatedRoute,
  convertToParamMap,
  provideRouter,
  Routes,
} from '@angular/router';
import { provideToastr } from 'ngx-toastr';

export function testAppProviders(routes: Routes = []): (Provider | EnvironmentProviders)[] {
  return [
    provideRouter(routes),
    provideNoopAnimations(),
    provideToastr(),
  ];
}

export function activatedRouteStub(params: Record<string, string> = {}): Provider {
  return {
    provide: ActivatedRoute,
    useValue: {
      snapshot: {
        paramMap: convertToParamMap(params),
      },
    },
  };
}
