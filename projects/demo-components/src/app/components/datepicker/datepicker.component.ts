import { Component } from '@angular/core';
import { StfDatepickerComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    StfTextComponent,
    StfDatepickerComponent
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {

}
