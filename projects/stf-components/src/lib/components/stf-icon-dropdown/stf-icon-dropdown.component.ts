import { Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewChild } from '@angular/core';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stf-icon-dropdown',
  standalone: true,
  imports: [StfIconComponent, CommonModule],
  templateUrl: './stf-icon-dropdown.component.html',
  styleUrl: './stf-icon-dropdown.component.css'
})
export class StfIconDropdownComponent {
  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @Input({ alias: 'stf-items' }) stf_items: Array<any> = [];
  @Output() emitOnClick = new EventEmitter();


  isOpen = signal(false);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.mainContainer && !this.mainContainer.nativeElement.contains(event.target)) {
      this.isOpen.update(prev => false);
    }
  }

  togglePicker() {
    this.isOpen.update(prev => !prev);
  }

  chooseItem(item: any) {
    this.togglePicker();
    this.emitOnClick.emit(item);
  }
}
