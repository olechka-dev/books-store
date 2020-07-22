import { Component, Input, OnInit } from '@angular/core';
import { BookInfo } from '../../core/types/book-search.types';
import { MatDialog } from '@angular/material';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    @Input() books: BookInfo[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openDetails(book: BookInfo) {
        const dialogRef = this.dialog.open(BookDetailsComponent, {
            width: '596px',
            height: '330px',
            data: {
                ...book
            }
        });
    }

}
