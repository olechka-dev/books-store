import { Action, createReducer, on } from '@ngrx/store';
import { searchBooksSuccess } from './actions';
import { createEntityAdapter } from '@ngrx/entity';
import { BookInfo, SearchState } from '../../../core/types/book-search.types';

export const adapter = createEntityAdapter<BookInfo>();

export const searchInitialState: SearchState = {
    items: adapter.getInitialState(),
    totalItems: 0
};

const reducer = createReducer(searchInitialState,
    on(searchBooksSuccess, (state, { payload }) => ({...payload, items: adapter.addAll(payload.items, state.items)}))
);

export function searchReducer(state: SearchState | null, action: Action) {
    return reducer(state, action);
}
