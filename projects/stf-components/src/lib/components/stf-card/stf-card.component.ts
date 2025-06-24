import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'stf-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stf-card.component.html',
  styleUrl: './stf-card.component.scss'
})
export class StfCardComponent {
  @ContentChild('header') header!: ElementRef;
  @ContentChild('footer') footer!: ElementRef;

  get showHeader() { return !!this.header; }
  get showFooter() { return !!this.footer; }
}
