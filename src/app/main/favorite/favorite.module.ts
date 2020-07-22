import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { favoriteRouter } from './favorite-routing.module';


@NgModule({
    declarations: [FavoriteListComponent],
    imports: [
        CommonModule,
        favoriteRouter
    ]
})
export class FavoriteModule {
}
