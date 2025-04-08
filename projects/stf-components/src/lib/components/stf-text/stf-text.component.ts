import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stf-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stf-text.component.html',
  styleUrl: './stf-text.component.scss'
})
export class StfTextComponent {
  @Input({ alias: 'stf-color' })
  stf_color: 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' | 'black' | 'white' = 'primary';

  @Input({ alias: 'stf-label' }) stf_label: string = '';
  @Input({ alias: 'stf-size' }) stf_size: 'title' | 'subtitle' | 'body' | 'detail' = 'title';
  @Input({ alias: 'stf-weight' }) stf_weight: '100' | '300' | '400' | '500' | '600' | '700' | '800' | '900' = '100';
  @Input({ alias: 'stf-align' }) stf_align: 'left' | 'center' | 'right' = 'left';

  processClass() {
    return `text-size-${this.stf_size} 
    --color-${this.stf_color} 
    --font-weight-${this.stf_weight} 
    --text-align-${this.stf_align} 
    `;
  }
}
