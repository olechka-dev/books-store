import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { signInReducer } from './reducers';
import { SignInEffects } from './effects';

export interface AppState {
    user: string
}

export const reducers: ActionReducerMap<AppState> = {
    user: signInReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];

export const selectUserState = createFeatureSelector<string>('user');

export const EFFECTS = [SignInEffects];
