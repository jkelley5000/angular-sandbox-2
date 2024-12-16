import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesSearchService {
    baseApi: string = 'http://localhost:5255';

    constructor(private httpClient: HttpClient) { }

    searchTerm$ = new Subject<string>();
    results$ = this.searchTerm$.pipe(
        // Wait 300ms after each keystroke
        debounceTime(300),
        // Only emit if the search term has changed
        distinctUntilChanged(),
        // Cancel previous request, only return most recent
        switchMap(term => this.httpClient.get<any[]>(`${this.baseApi}/search?searchTerm=${term}`))
    );

    /**
     * 
     * @returns API response, all movies and shows
     */
    getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(`${this.baseApi}/all-movies-shows`);
    }
}
