import { createFeatureSelector, createSelector } from '@ngrx/store';
import { favoriteAdapter } from './reducers';
import { EntityState } from '@ngrx/entity';
import { BookInfo } from '../../../core/types/book-search.types';

export const selectFavoriteState = createFeatureSelector<EntityState<BookInfo>>('favorite');

const {
    selectIds,
    selectEntities,
    selectAll
} = favoriteAdapter.getSelectors();

export const getFavoriteIds = selectIds;
export const selectFavoritesList = createSelector(selectFavoriteState, selectAll);
export const selectIsFavorite = (id) => createSelector(getFavoriteIds, favoriteIds => favoriteIds.includes(id));


