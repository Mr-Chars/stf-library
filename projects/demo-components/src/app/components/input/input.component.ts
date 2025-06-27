import { Component } from '@angular/core';
import { StfInputComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    StfInputComponent,
    StfTextComponent
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  onEmitInput(data: any) {
    console.log(data);
  }

  onEmitEnter() {
    console.log('enter ...');
  }
}
