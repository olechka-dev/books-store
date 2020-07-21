import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome', //TODO change to 'search' when search is implemented, and add route guard
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
    },
    // TODO {
    //   path: 'search',
    //   loadChildren: () => import('@realiecho/main/main.module').then(m => m.MainModule)
    // },
    {
        path: '**',
        redirectTo: 'welcome', // TODO 'search',
        pathMatch: 'full'
    },

];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);
