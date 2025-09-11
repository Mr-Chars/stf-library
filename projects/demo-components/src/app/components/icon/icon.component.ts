import { Component } from '@angular/core';
import { StfIconComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    StfTextComponent,
    StfIconComponent
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

}
