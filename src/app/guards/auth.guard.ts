import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable, switchMap } from 'rxjs';
import { TokensState, UserState } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store<{tokens:TokensState}>,private router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("tokens").pipe(map(tokens=>{
      if (tokens)
          return true ;
      return this.router.createUrlTree(["/"]);
    }));
  }
}



