import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { favoriteRouter } from './favorite-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [FavoriteListComponent],
    imports: [
        CommonModule,
        favoriteRouter,
        SharedModule
    ]
})
export class FavoriteModule {
}
