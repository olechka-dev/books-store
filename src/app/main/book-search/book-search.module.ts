import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { searchRouter } from './book-search-routing.module';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SEARCH_EFFECTS } from './store';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        searchRouter,
        MatInputModule,
        SharedModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        StoreModule.forFeature('search', searchReducer),
        EffectsModule.forFeature(SEARCH_EFFECTS)
    ]
})
export class BookSearchModule {
}
