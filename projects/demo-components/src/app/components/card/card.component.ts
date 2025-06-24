import { Component } from '@angular/core';
import { StfCardComponent } from '../../../../../stf-components/src/public-api';
import { StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StfCardComponent, StfTextComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
