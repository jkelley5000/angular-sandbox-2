import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesSearchService } from './movies-search.service';
import { Movie } from './movie.model';

@Component({
    selector: 'app-movies-search',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './movies-search.component.html',
    styleUrl: './movies-search.component.scss'
})
export class MoviesSearchComponent {
    searchResults$!: Observable<Movie[]>;
    moviesAndShowsResults: Movie[] = [];

    constructor(private moviesSearchService: MoviesSearchService) { }

    ngOnInit(): void {
        this.searchResults$ = this.moviesSearchService.results$;
        /**
         * Subscribes to changes to the search results observable
         * Redefines moviesAndShowsResults array with api response
         */
        this.searchResults$.subscribe(movies => {
            this.moviesAndShowsResults = movies;
        });
    }

    /**
     * Extracts search term from input and then resets the value of searchTerm the observable 
     * with the new value from the search input. 
     * @param event keyup event on search input
     */
    searchMovies(event: any): void {
        let searchInput = event.target.value;
        if (searchInput.length > 2) {
            this.moviesSearchService.searchTerm$.next(searchInput);
        }
    }

}
