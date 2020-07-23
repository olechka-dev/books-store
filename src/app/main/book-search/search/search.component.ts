import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { BookInfo, SearchState } from '../../../core/types/book-search.types';
import { select, Store } from '@ngrx/store';
import { MainState, selectBooksList } from '../../store';
import { resetSearchResults, searchBooks } from '../../store/book-search/actions';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    search: FormControl;
    books: Observable<BookInfo[]>;

    private componentDestroy$ = new Subject();

    constructor(private store: Store<MainState>) {
    }

    ngOnInit() {

        this.search = new FormControl('');

        this.search.valueChanges
            .pipe(
                takeUntil(this.componentDestroy$),
                debounceTime(300)
            )
            .subscribe((val) => {
                if (val && val.trim()) {
                    this.store.dispatch(searchBooks({ payload: val.trim() }));
                } else {
                    this.store.dispatch(resetSearchResults());
                }
            });

        this.books = this.store
            .pipe(select(selectBooksList));
    }

    ngOnDestroy() {
        this.store.dispatch(resetSearchResults());
        this.componentDestroy$.next();
        this.componentDestroy$.unsubscribe();
    }

}
