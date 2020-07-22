import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { favoriteRouter } from './favorite-routing.module';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers';


@NgModule({
    declarations: [FavoriteListComponent],
    imports: [
        CommonModule,
        favoriteRouter,
        StoreModule.forFeature('favorite', favoriteReducer)
    ]
})
export class FavoriteModule {
}
