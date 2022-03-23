import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseUrlInterCeptor implements HttpInterceptor{
  baseUrl = "http://127.0.0.1:8000/api/"
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
        url : this.baseUrl + req.url,
    })
    return next.handle(request)
  }
}