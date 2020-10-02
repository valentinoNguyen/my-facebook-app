import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiBaseUrlInterceptor } from './interceptors/api-base-url.interceptor';


@NgModule({
  imports: [
    HttpClientModule,
  ]
})
export class AppHttpModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppHttpModule,
      providers: [
        {
          multi: true,
          provide: HTTP_INTERCEPTORS,
          useClass: ApiBaseUrlInterceptor,
        },
      ],
    };
  }
}
