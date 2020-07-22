import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainRouter } from './main-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
    declarations: [MainContainerComponent],
    imports: [
        CommonModule,
        mainRouter
    ]
})
export class MainModule {
}
