import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCardFormatterComponent } from './components/credit-card-formatter/credit-card-formatter.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditCardFormatterComponent, StarRatingComponent, DragAndDropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-sandbox-2';
}
