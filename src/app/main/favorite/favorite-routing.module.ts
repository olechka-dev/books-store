import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


const routes: Routes = [
    {
        path: '',
        component: FavoriteListComponent
    }
];

export const favoriteRouter: ModuleWithProviders = RouterModule.forChild(routes);
