import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';


const routes: Routes = [
    {
        path: '',
        component: MainContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                loadChildren: () => import('./book-search/book-search.module').then(m => m.BookSearchModule),
            },
            {
                path: 'wishlist',
                loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule),
            }
        ]
    }
];

export const mainRouter: ModuleWithProviders = RouterModule.forChild(routes);
