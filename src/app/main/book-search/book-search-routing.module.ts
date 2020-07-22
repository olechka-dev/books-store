import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    }
];

export const searchRouter: ModuleWithProviders = RouterModule.forChild(routes);
