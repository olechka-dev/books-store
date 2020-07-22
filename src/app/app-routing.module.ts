import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignInGuard } from './main/sign-in.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        canActivate: [SignInGuard]
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    },

];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);
