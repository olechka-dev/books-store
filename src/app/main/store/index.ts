import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { searchReducer, selectSearchAll, selectSearchEntities } from './book-search/reducers';
import { favoriteReducer, selectFavoriteAll, selectFavoriteIds } from './favorite/reducers';
import { BookInfo, SearchState } from '../../core/types/book-search.types';
import { EntityState } from '@ngrx/entity';
import { SearchEffects } from './book-search/effects';

export interface MainState {
    search: SearchState,
    favorite: EntityState<BookInfo>
}

export const mainReducers: ActionReducerMap<MainState> = {
    search: searchReducer,
    favorite: favoriteReducer
};

export const selectMainState = createFeatureSelector<MainState>('mainData');

export const selectFavoriteState = createSelector(selectMainState, state => state.favorite);


export const selectFavoritesList = createSelector(selectFavoriteState, selectFavoriteAll);
export const selectFavoriteIdsState = createSelector(selectFavoriteState, selectFavoriteIds);
export const selectIsFavorite = (id) => createSelector(selectFavoriteIdsState, favoriteIds => favoriteIds.includes(id));


export const selectSearchState = createSelector(selectMainState, state => state.search);



export const selectBooksItems = createSelector(selectSearchState, state => state.items);


export const selectBooksList = createSelector(selectBooksItems, selectSearchAll);
export const getBookById = (id: string) => createSelector(
    selectSearchEntities,
    entities => {
        if (!!entities) {
            return entities[id];
        }
    }
);

export const SEARCH_EFFECTS = [SearchEffects];
