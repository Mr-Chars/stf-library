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
  @Input() ngModel: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() ngModelChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newCheckedState = target.checked;
    this.ngModel = newCheckedState;
    this.ngModelChange.emit(this.ngModel);
  }
}
