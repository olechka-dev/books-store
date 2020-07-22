import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { SignInActions } from './actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SignInEffects {
    getUser$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(SignInActions.USER_SIGN_IN),
                tap(() => {
                    this.router.navigateByUrl('search');
                })
            );
    }, {dispatch: false});

    constructor(private actions$: Actions, private router: Router) {
    }
}
