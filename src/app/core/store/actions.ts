import { createAction, props } from '@ngrx/store';

export enum SignInActions {
    USER_SIGN_IN = '[Sign In] User Sign In'
}

export const userSignIn = createAction(SignInActions.USER_SIGN_IN, props<{ payload: string }>());
