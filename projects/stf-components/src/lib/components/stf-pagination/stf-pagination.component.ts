import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StfTextComponent } from '../stf-text/stf-text.component';

@Component({
  selector: 'stf-pagination',
  standalone: true,
  imports: [FormsModule, CommonModule, StfTextComponent],
  templateUrl: './stf-pagination.component.html',
  styleUrl: './stf-pagination.component.scss'
})
export class StfPaginationComponent {
  @Input() totalEntries = 25;
  @Output() pageChange = new EventEmitter<any>();
  entriesPerPage: 10 | 20 = 10;
  pageSizes: Array<number> = [];
  currentPage = 1;

  ngOnInit() {
    this.getSizesPages();
  }

  getSizesPages() {
    this.pageSizes = [10, 20].filter((page: any) => page <= this.totalEntries);
  }

  get totalPages(): number {
    return Math.ceil(this.totalEntries / this.entriesPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get visiblePages(): number[] {
    const maxVisible = 3;
    const start = Math.max(1, this.currentPage - 1);
    const end = Math.min(this.totalPages, this.currentPage + 1);
    return this.pages.slice(start - 1, end);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.entriesPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.entriesPerPage, this.totalEntries);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit({
        currentPage: this.currentPage,
        quantityPerPage: this.entriesPerPage,
      });
    }
  }

  onEntriesPerPageChange(): void {
    this.currentPage = 1;

    this.pageChange.emit({
      currentPage: this.currentPage,
      quantityPerPage: this.entriesPerPage,
    });
  }

  getMessage() {
    return `Mostrando ${this.startIndex + 1} a ${this.endIndex} de ${this.totalEntries}`
  }
}
