import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StfTextComponent } from '../stf-text/stf-text.component';

@Component({
  selector: 'stf-checkbox',
  standalone: true,
  imports: [StfTextComponent],
  templateUrl: './stf-checkbox.component.html',
  styleUrl: './stf-checkbox.component.css'
})
export class StfCheckboxComponent {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() ngChangeCheck = new EventEmitter<boolean>();

  idUnique = 0;
  ngOnInit() {
    this.idUnique = Date.now() + this.getRandomIntInclusive(1, 99999);
  }
  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isChecked = target.checked;
    this.ngChangeCheck.emit(this.isChecked);
  }

  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
