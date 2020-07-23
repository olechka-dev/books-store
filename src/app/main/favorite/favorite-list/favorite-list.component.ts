import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainState, selectFavoritesList } from '../../store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookInfo } from '../../../core/types/book-search.types';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteListComponent implements OnInit {

    favoriteList: Observable<BookInfo[]>;

    constructor(private store: Store<MainState>) {
    }

    ngOnInit() {
        this.favoriteList = this.store.pipe(
            select(selectFavoritesList)
        );
    }

}
