import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BaseUrlInterCeptor } from "./interceptors/base-url.interceptor";

@NgModule({
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:BaseUrlInterCeptor,
      multi:true 
    }
  ]
})
export class CoreModule{}