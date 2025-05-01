import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewChild } from '@angular/core';
import { StfTextComponent } from '../../../public-api';

@Component({
  selector: 'stf-image-selector',
  standalone: true,
  imports: [CommonModule, StfTextComponent],
  templateUrl: './stf-image-selector.component.html',
  styleUrls: ['./stf-image-selector.component.scss', '../../_variables.scss']
})
export class StfImageSelectorComponent {
  @ViewChild('mainContainer') mainContainer!: ElementRef;

  @Input({ alias: 'stf-item-url', required: true }) itemUrl: string = '';
  @Input({ alias: 'stf-item-id', required: true }) itemId: string = '';
  @Input({ alias: 'stf-preview' }) preview = true;
  @Input() images: any[] = [];
  @Output() imageSelected = new EventEmitter<any>();

  isOpen = signal(false);
  selectedImage = {
    id: '',
    url: '',
  };

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.mainContainer && !this.mainContainer.nativeElement.contains(event.target)) {
      this.isOpen.update(prev => false);
    }
  }

  selectImage(image: any): void {
    this.selectedImage.id = image[this.itemId];
    this.selectedImage.url = image[this.itemUrl];

    this.imageSelected.emit(image);
    this.isOpen.update(prev => false);
  }

  togglePicker() {
    this.isOpen.update(prev => !prev);
  }

  getLabelText() {
    return this.selectedImage?.url ? 'Selecciona otra imagen' : 'Selecciona una imagen';
  }
}
