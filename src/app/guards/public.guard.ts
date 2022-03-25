import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { TokensState } from "../interfaces/user.interface";

@Injectable({
  providedIn:"root"
})
export class PublicGuard implements CanActivate {
  constructor(private store:Store<{tokens:TokensState}>,private router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("tokens").pipe(map(tokens=>{
      if (tokens)
          return this.router.createUrlTree(["/dashboard"]);
      return true ;
    }));
  }
}