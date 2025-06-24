import { Component } from '@angular/core';
import { StfImageSelectorComponent, StfTextComponent } from 'stf-components';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [
    StfImageSelectorComponent,
    StfTextComponent
  ],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.scss'
})
export class ImageSelectorComponent {
  imageList: any[] = [
    { id: 1, url: 'https://picsum.photos/200/300', title: 'Imagen 1' },
    { id: 2, url: 'https://picsum.photos/200/301', title: 'Imagen 2' },
    { id: 3, url: 'https://picsum.photos/200/302', alt: 'Tercera imagen' },
    { id: 4, url: 'https://picsum.photos/200/303' }
  ];

  onImageSelected(image: any): void {
    // this.selectedImage = image;
    console.log('Imagen seleccionada:', image);
  }
}
