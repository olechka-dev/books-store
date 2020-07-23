import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BookInfo } from '../../core/types/book-search.types';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addFavorite, removeFavorite } from '../../main/store/favorite/actions';
import { MainState, selectIsFavorite } from '../../main/store';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit, OnDestroy {

    isFavorite = false;
    private componentDestroy$ = new Subject();

    constructor(@Inject(MAT_DIALOG_DATA) public data: BookInfo, private store: Store<MainState>) {
    }

    ngOnInit() {
        this.store.pipe(
            takeUntil(this.componentDestroy$),
            select(selectIsFavorite(this.data.id))
        ).subscribe((isFavorite) => {
            this.isFavorite = isFavorite;
        });
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
