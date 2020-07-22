import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { BookInfo, SearchState } from '../../../core/types/book-search.types';
import { select, Store } from '@ngrx/store';
import { searchBooks } from '../store/actions';
import { selectBooksList } from '../store';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    search: FormControl;
    books: Observable<BookInfo[]>;

    private componentDestroy$ = new Subject();

    constructor(private store: Store<SearchState>) {
    }

    ngOnInit() {

        this.search = new FormControl('');

        this.search.valueChanges
            .pipe(
                takeUntil(this.componentDestroy$),
                debounceTime(300),
                filter(val => !!val)
            )
            .subscribe((val) => {
            console.log('val', val);
            this.store.dispatch(searchBooks({payload: val}));

        });

        this.books = this.store
            .pipe(select(selectBooksList));
    }

    ngOnDestroy() {
        this.componentDestroy$.next();
        this.componentDestroy$.unsubscribe();
    }

}
