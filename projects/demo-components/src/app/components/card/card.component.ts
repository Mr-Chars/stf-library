import { Component } from '@angular/core';
import { StfCardComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StfCardComponent, StfTextComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
