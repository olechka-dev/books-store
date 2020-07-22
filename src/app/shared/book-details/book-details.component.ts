import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BookInfo } from '../../core/types/book-search.types';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: BookInfo) {
    }

    ngOnInit() {
    }
}
