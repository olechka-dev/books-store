import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksSearchComponent } from './books-search/books-search.component';
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
                component: BooksSearchComponent
            }
        ]
    }
];

export const mainRouter: ModuleWithProviders = RouterModule.forChild(routes);
