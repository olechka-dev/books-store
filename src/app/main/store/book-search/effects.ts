import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SearchActions, searchBooksFailed, searchBooksSuccess } from './actions';
import { SearchApiService } from '../../../core/services/search-api.service';

@Injectable()
export class SearchEffects {
    getUser$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(SearchActions.SEARCH),
                switchMap((action: { payload: string }) => {
                    return this.searchApi.getBooksList(action.payload)
                        .pipe(
                            map((res) => searchBooksSuccess({ payload: res })),
                            catchError((err) => [searchBooksFailed(err)])
                        );
                }),

            );
    });

    constructor(private actions$: Actions, private searchApi: SearchApiService) {
    }
}
