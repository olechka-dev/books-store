import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { BookInfo } from '../../../core/types/book-search.types';
import { addFavorite, removeFavorite } from './actions';

export const favoriteAdapter = createEntityAdapter<BookInfo>();

export const favoriteInitialState: EntityState<BookInfo> = favoriteAdapter.getInitialState();


const reducer = createReducer(favoriteInitialState,
    on(addFavorite, (state, { payload }) => favoriteAdapter.addOne(payload, state)),
    on(removeFavorite, (state, { payload }) => favoriteAdapter.removeOne(payload, state))
);

export function favoriteReducer(state: EntityState<BookInfo> | null, action: Action) {
    return reducer(state, action);
}


const {
    selectIds,
    selectEntities,
    selectAll
} = favoriteAdapter.getSelectors();

export const selectFavoriteIds = selectIds;
export const selectFavoriteAll = selectAll;
