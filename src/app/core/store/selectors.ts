import { createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<string>('user');
