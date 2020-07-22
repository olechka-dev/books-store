import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../../../core/types/book-search.types';
import { adapter } from './reducers';
import { SearchEffects } from './effects';


export const selectSearchState = createFeatureSelector<SearchState>('search');

const {
    selectEntities,
    selectAll
} = adapter.getSelectors();

export const selectBooksItems = createSelector(selectSearchState, state => state.items);


export const selectBooksList = createSelector(selectBooksItems, selectAll);
export const getBookById = (id: string) => createSelector(
    selectEntities,
    entities => {
        if (!!entities) {
            return entities[id];
        }
    }
);

export const SEARCH_EFFECTS = [SearchEffects];


