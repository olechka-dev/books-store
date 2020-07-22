import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [SearchResultsComponent, BookDetailsComponent],
    exports: [SearchResultsComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule
    ],
    entryComponents: [BookDetailsComponent]
})
export class SharedModule {
}
