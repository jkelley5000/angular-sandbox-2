import { Routes } from '@angular/router';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { CreditCardFormatterComponent } from './components/credit-card-formatter/credit-card-formatter.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';

export const routes: Routes = [
    { path: 'star-rating', component: StarRatingComponent },
    { path: 'drag-and-drop', component: DragAndDropComponent },
    { path: 'movies-search', component: MoviesSearchComponent },
    { path: 'credit-card-formatter', component: CreditCardFormatterComponent },
    { path: '', redirectTo: 'star-rating', pathMatch: 'full' },
    { path: '**', redirectTo: 'star-rating' },
];
