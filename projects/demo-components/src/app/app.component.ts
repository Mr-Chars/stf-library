import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StfButtonComponent } from '../../../stf-components/src/public-api';
import { StfTextComponent } from '../../../stf-components/src/lib/components/stf-text/stf-text.component';
import { StfSelectComponent } from '../../../stf-components/src/lib/components/stf-select/stf-select.component';
import { ItemSelect } from '../../../stf-components/src/interfaces/generals';
import { StfInputComponent } from '../../../stf-components/src/lib/components/stf-input/stf-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StfButtonComponent,
    StfTextComponent,
    StfSelectComponent,
    StfInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-components';

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

  eventClick() {
    console.log('recibiendo click...');
  }

  onEmitInput(data: any) {
    console.log(data);
  }

  onSelectElement(data: any) {
    console.log(data);
  }
}
