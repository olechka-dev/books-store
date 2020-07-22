import { Action, createReducer, on } from '@ngrx/store';
import { SearchResults } from '../../../core/types/book-search.types';
import { searchBooksSuccess } from './actions';

export const userInitialState: SearchResults = {
    items: [],
    totalItems: 0
};

const reducer = createReducer(userInitialState,
    on(searchBooksSuccess, (state, { payload }) => ({...payload}))
);

export function searchReducer(state: SearchResults | null, action: Action) {
    return reducer(state, action);
}
