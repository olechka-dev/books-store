import { Action, createReducer, on } from '@ngrx/store';
import { userSignIn } from './actions';

export const userInitialState = null;

const reducer = createReducer(userInitialState,
    on(userSignIn, (state, { payload }) => payload)
);

export function signInReducer(state: string | null, action: Action) {
    return reducer(state, action);
}
