import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCardFormatterComponent } from './components/credit-card-formatter/credit-card-formatter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditCardFormatterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-sandbox-2';
}
