import { Component } from '@angular/core';
import { StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    StfTextComponent
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {

}
