import { Component } from '@angular/core';
import { StfPaginationComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    StfTextComponent,
    StfPaginationComponent,
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {


  pageChangedPagination(event: any) {
    console.log(event);
  }
}
