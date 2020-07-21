import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { signInReducer } from './reducers';

export interface AppState {
    user: string
}

export const reducers: ActionReducerMap<AppState> = {
    user: signInReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
