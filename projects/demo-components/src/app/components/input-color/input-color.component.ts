import { Component } from '@angular/core';
import { StfInputColorComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-input-color',
  standalone: true,
  imports: [
    StfInputColorComponent,
    StfTextComponent
  ],
  templateUrl: './input-color.component.html',
  styleUrl: './input-color.component.scss'
})
export class InputColorComponent {


  selectInputColor(data: any) {
    console.log('---------selectInputColor');
    console.log(data);
    console.log('---------selectInputColor');
  }
}
