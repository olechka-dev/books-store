import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookInfo, SearchResults } from '../../../core/types/book-search.types';
import { SearchEffects } from './effects';

export const selectSearchState = createFeatureSelector<SearchResults>('search');

export const selectBooksList = createSelector(selectSearchState, state => state.items);

export const SEARCH_EFFECTS = [SearchEffects];
