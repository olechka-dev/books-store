import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainRouter } from './main-routing.module';
import { BooksSearchComponent } from './books-search/books-search.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
    declarations: [BooksSearchComponent, MainContainerComponent],
    imports: [
        CommonModule,
        mainRouter
    ]
})
export class MainModule {
}
