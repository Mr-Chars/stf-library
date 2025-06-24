import { Component } from '@angular/core';
import { StfSelectComponent, StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    StfSelectComponent,
    StfTextComponent
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  itemForSelectToProve: Array<any> = [
    {
      id: '1',
      nombre: 'dato 1',
    },
    {
      id: '2',
      nombre: 'dato 2',
    },
    {
      id: '3',
      nombre: 'dato 3',
    }
  ]

  onSelectElement(data: any) {
    console.log(data);
  }
}
