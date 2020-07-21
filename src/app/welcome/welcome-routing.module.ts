import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeScreenComponent
    }
];

export const welcomeRouter: ModuleWithProviders = RouterModule.forChild(routes);
