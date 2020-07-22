import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState, selectUserState } from '../core/store';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SignInGuard implements CanActivate {
    constructor(private store: Store<AppState>,
                private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.store.pipe(
            select(selectUserState),
            take(1),
            map(user => !!user),
            tap((isSignedIn) => {
                if(!isSignedIn) {
                    this.router.navigateByUrl('welcome');
                }
            })
        );
    }

}
