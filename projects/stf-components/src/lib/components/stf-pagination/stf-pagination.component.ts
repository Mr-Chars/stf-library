import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StfTextComponent } from 'stf-components';

@Component({
  selector: 'stf-pagination',
  standalone: true,
  imports: [FormsModule, CommonModule, StfTextComponent],
  templateUrl: './stf-pagination.component.html',
  styleUrl: './stf-pagination.component.css'
})
export class StfPaginationComponent {
  @Input() totalEntries = 25;
  @Input() entriesPerPage = 10;
  @Output() pageChange = new EventEmitter<number>();
  pageSizes = [10, 25, 50, 100];
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.totalEntries / this.entriesPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.entriesPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.entriesPerPage, this.totalEntries);
  }

  getMessage() {
    return `Mostrando ${this.startIndex + 1} a ${this.endIndex} de ${this.totalEntries}`
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  onEntriesPerPageChange(): void {
    this.currentPage = 1;
    this.pageChange.emit(this.currentPage);
  }
}
