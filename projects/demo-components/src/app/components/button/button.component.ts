import { Component } from '@angular/core';
import { StfButtonComponent, StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    StfButtonComponent,
    StfTextComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  eventClick() {
    console.log('recibiendo click...');
  }

}
