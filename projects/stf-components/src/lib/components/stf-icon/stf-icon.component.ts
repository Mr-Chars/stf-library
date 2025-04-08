import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stf-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stf-icon.component.html',
  styleUrls: ['./stf-icon.component.scss', '../../_variables.scss'],
})
export class StfIconComponent {
  @Input({ alias: 'stf-type' }) type: string = '';
  @Input({ alias: 'stf-color' }) color: string = 'var(--color-success)';
}
