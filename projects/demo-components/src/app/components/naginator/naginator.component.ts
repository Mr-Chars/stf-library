import { Component } from '@angular/core';
import { StfNavigationComponent, StfTextComponent } from '../../../../../stf-components/src/public-api';

@Component({
  selector: 'app-naginator',
  standalone: true,
  imports: [StfTextComponent, StfNavigationComponent],
  templateUrl: './naginator.component.html',
  styleUrl: './naginator.component.scss'
})
export class NaginatorComponent {

}
