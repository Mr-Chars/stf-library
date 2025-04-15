import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stf-button',
  standalone: true,
  imports: [CommonModule, StfIconComponent],
  templateUrl: './stf-button.component.html',
  styleUrl: './stf-button.component.scss'
})
export class StfButtonComponent {
  @Input({ alias: 'stf-type' }) stfType: string = 'button';
  @Output() emitOnClick = new EventEmitter();

  @Input() label: string = '';
  @Input({ alias: 'stf-color' }) stf_color: 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' | 'transparent' = 'primary';
  @Input({ alias: 'stf-animation' }) stf_animation: number = 1;
  @Input({ alias: 'stf-disabled' }) stf_disabled: boolean = false;
  @Input({ alias: 'stf-icon' }) icon: string = '';

  processed_classes = '';

  ngOnInit() {
    this.processed_classes = `stf-btn-${this.stf_color}`;
    this.processed_classes += ` animation-${this.stf_animation}`;
  }

  eventClick() {
    this.emitOnClick.emit();
  }
}
