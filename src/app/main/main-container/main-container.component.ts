import { Component, OnInit } from '@angular/core';
import { AppState, selectUserState } from '../../core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

    userName: Observable<string>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.userName = this.store.pipe(
            select(selectUserState)
        );
    }
}
