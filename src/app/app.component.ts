import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreditCardFormatterComponent } from './components/credit-card-formatter/credit-card-formatter.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-sandbox-2';
}
