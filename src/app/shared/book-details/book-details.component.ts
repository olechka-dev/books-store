import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BookInfo } from '../../core/types/book-search.types';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { addFavorite, removeFavorite } from '../../main/favorite/store/actions';
import { Observable, Subject } from 'rxjs';
import { selectIsFavorite } from '../../main/favorite/store';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

    isFavorite = false;
    private componentDestroy$ = new Subject();

    constructor(@Inject(MAT_DIALOG_DATA) public data: BookInfo, private store: Store<EntityState<BookInfo>>) {
    }

    ngOnInit() {
        this.store.pipe(
            takeUntil(this.componentDestroy$),
            select(selectIsFavorite(this.data.id))
        ).subscribe((isFavorite) => {
            this.isFavorite = isFavorite;
            console.log('is fav', this.isFavorite);
        })
    }

    addToWishlist() {
        if (this.isFavorite) {
            this.store.dispatch(removeFavorite({ payload: this.data.id }));

        } else {
            this.store.dispatch(addFavorite({ payload: this.data }));
        }

    }

    ngOnDestroy() {
        this.componentDestroy$.next();
        this.componentDestroy$.unsubscribe();
    }
}
