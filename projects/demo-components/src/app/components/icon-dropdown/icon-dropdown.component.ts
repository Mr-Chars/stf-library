import { Component } from '@angular/core';
import { StfIconDropdownComponent, StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-icon-dropdown',
  standalone: true,
  imports: [
    StfIconDropdownComponent,
    StfTextComponent
  ],
  templateUrl: './icon-dropdown.component.html',
  styleUrl: './icon-dropdown.component.scss'
})
export class IconDropdownComponent {


  itemsForIconDropdown = [
    {
      id: 1,
      name: 'ver',
    },
    {
      id: 2,
      name: 'editar',
    }
  ]
}
