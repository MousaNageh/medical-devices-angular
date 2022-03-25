import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { UserState } from "../interfaces/user.interface";

@Injectable({
  providedIn:"root"
})
export class PublicGuard implements CanActivate {
  constructor(private store:Store<{user:UserState}>,private router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("user").pipe(map(user=>{
      console.log(user);
      if (user)
          return this.router.createUrlTree(["/dashboard"]);
      return true ;
    }));
  }
}