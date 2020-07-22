import { createAction, props } from '@ngrx/store';
import { BookInfo } from '../../../core/types/book-search.types';

export enum FavoriteActions {
    ADD_FAVORITE = '[Favorite] Add Favorite',
    REMOVE_FAVORITE = '[Favorite] Remove Favorite'
}

export const addFavorite = createAction(FavoriteActions.ADD_FAVORITE, props<{ payload: BookInfo }>());
export const removeFavorite = createAction(FavoriteActions.REMOVE_FAVORITE, props<{ payload: string }>());
