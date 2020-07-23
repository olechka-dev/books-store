import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainRouter } from './main-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainMetaReducers, mainReducers, SEARCH_EFFECTS } from './store';


@NgModule({
    declarations: [MainContainerComponent],
    imports: [
        CommonModule,
        mainRouter,
        EffectsModule.forFeature(SEARCH_EFFECTS),
        StoreModule.forFeature('mainData', mainReducers, { metaReducers: mainMetaReducers })
    ]
})
export class MainModule {
}

