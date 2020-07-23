import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SearchResults } from '../types/book-search.types';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SearchApiService {

    constructor(private http: HttpClient) {
    }

    getBooksList(query): Observable<SearchResults> {
        const params = {
            q: query.replace(/\s+/g, '+'),
            maxResults: '20',
            projection: 'lite'
        };
        return this.http.get<SearchResults>(environment.searchApiUrl, {params})
            .pipe(
                tap((res: SearchResults) => {
                    if (!Array.isArray(res.items)) {
                        throw new Error('no items array');
                    }
                })
            );
    }
}
