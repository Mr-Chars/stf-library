import { Component } from '@angular/core';
import { StfCheckboxComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    StfTextComponent,
    StfCheckboxComponent,
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  areTermsAccepted: boolean = false;


  listenChange(event: any) {
    console.log(event);

  }
}
