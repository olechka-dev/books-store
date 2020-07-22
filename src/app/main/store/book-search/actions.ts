import { createAction, props } from '@ngrx/store';
import { SearchResults } from '../../../core/types/book-search.types';

export enum SearchActions {
    SEARCH = '[Search] Search Books',
    SEARCH_SUCCESS = '[Search] Search Books Success',
    SEARCH_FAILED = '[Search] Search Books Failed'
}

export const searchBooks = createAction(SearchActions.SEARCH, props<{ payload: string }>());
export const searchBooksSuccess = createAction(SearchActions.SEARCH_SUCCESS, props<{ payload: SearchResults }>());
export const searchBooksFailed = createAction(SearchActions.SEARCH_FAILED, props<{ payload: any }>()); //TODO something with it
