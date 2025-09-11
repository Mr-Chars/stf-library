import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { StfSkeletonScreenComponent } from '../stf-skeleton-screen/stf-skeleton-screen.component';

@Component({
  selector: 'stf-card',
  standalone: true,
  imports: [CommonModule, StfSkeletonScreenComponent],
  templateUrl: './stf-card.component.html',
  styleUrl: './stf-card.component.scss'
})
export class StfCardComponent {
  @ContentChild('header') header!: ElementRef;
  @ContentChild('footer') footer!: ElementRef;
  @Input({ alias: 'stf-loading' }) loading: boolean = false;

  get showHeader() { return !!this.header; }
  get showFooter() { return !!this.footer; }
}
