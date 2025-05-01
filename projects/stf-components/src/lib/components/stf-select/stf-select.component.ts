import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'stf-select',
  standalone: true,
  imports: [StfIconComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './stf-select.component.html',
  styleUrl: './stf-select.component.scss'
})
export class StfSelectComponent {
  @ViewChild('selectContainer') selectContainer!: ElementRef;
  @Output() emitOnSelect = new EventEmitter();
  @Input({ alias: 'stf-items' }) items: Array<any> = [];
  @Input({ alias: 'stf-item-value', required: true }) itemValue: string = '';
  @Input({ alias: 'stf-item-key', required: true }) itemKey: string = '';
  @Input({ alias: 'stf-item-key-selected' }) itemKeySelected: string = '';

  @Input({ alias: 'stf-placeholder' }) placeholder: string = '';
  @Input({ alias: 'stf-with-search' }) withSearch = false;
  @Input({ alias: 'stf-icon-color' }) iconColor = 'var(--color-primary)';

  searchControl = new FormControl('');

  itemSelected: any = {};
  isOpen = false;
  itemsProcessed: Array<any> = [];

  ngOnInit() {
    this.itemsProcessed = this.items;

    if (this.itemKeySelected) {
      // console.log('===================================');

      // console.log(this.itemsProcessed);

      const response = this.itemsProcessed.find((item) => item[this.itemKey] === this.itemKeySelected);
      // console.log(this.itemKeySelected);
      // console.log(response);
      // console.log('===================================');
      if (response) {
        this.itemSelected = { ...response };
      }
    }

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500), // Espera 500ms después de la última tecla antes de ejecutar la búsqueda
        distinctUntilChanged(), // Evita peticiones si el valor no cambió
      )
      .subscribe((results) => {
        this.itemsProcessed = this.items.filter((item) => item[this.itemValue].toLowerCase().includes(results!.toLowerCase()));
      });


  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.selectContainer && !this.selectContainer.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  getIcon() {
    return !this.isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  }

  selectItem(item: any) {
    this.itemSelected = { ...item }
    this.emitOnSelect.emit(this.itemSelected);
    this.isOpen = false;
  }
}
