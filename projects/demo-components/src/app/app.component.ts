import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StfButtonComponent } from '../../../stf-components/src/public-api';
import { StfTextComponent } from '../../../stf-components/src/lib/components/stf-text/stf-text.component';
import { StfSelectComponent } from '../../../stf-components/src/lib/components/stf-select/stf-select.component';
import { ItemSelect } from '../../../stf-components/src/interfaces/generals';
import { StfInputComponent } from '../../../stf-components/src/lib/components/stf-input/stf-input.component';
import { StfInputColorComponent } from '../../../stf-components/src/lib/components/stf-input-color/stf-input-color.component';
import { StfImageSelectorComponent } from '../../../stf-components/src/lib/components/stf-image-selector/stf-image-selector.component';
import { StfIconDropdownComponent } from '../../../stf-components/src/lib/components/stf-icon-dropdown/stf-icon-dropdown.component';
import { StfPaginationComponent } from '../../../stf-components/src/lib/components/stf-pagination/stf-pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StfButtonComponent,
    StfTextComponent,
    StfSelectComponent,
    StfInputComponent,
    StfInputColorComponent,
    StfImageSelectorComponent,
    StfIconDropdownComponent,
    StfPaginationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imageList: any[] = [
    { id: 1, url: 'https://picsum.photos/200/300', title: 'Imagen 1' },
    { id: 2, url: 'https://picsum.photos/200/301', title: 'Imagen 2' },
    { id: 3, url: 'https://picsum.photos/200/302', alt: 'Tercera imagen' },
    { id: 4, url: 'https://picsum.photos/200/303' }
  ];

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

  onImageSelected(image: any): void {
    // this.selectedImage = image;
    console.log('Imagen seleccionada:', image);
  }

  eventClick() {
    console.log('recibiendo click...');
  }

  onEmitInput(data: any) {
    console.log(data);
  }

  onSelectElement(data: any) {
    console.log(data);
  }

  selectInputColor(data: any) {
    console.log('---------selectInputColor');
    console.log(data);
    console.log('---------selectInputColor');
  }
}
