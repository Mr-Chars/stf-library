import { Component, computed, signal, WritableSignal } from '@angular/core';
import { StfTextComponent } from '../stf-text/stf-text.component';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { CommonModule } from '@angular/common';
import { StfButtonComponent } from '../stf-button/stf-button.component';
import { IMonth } from '../../../interfaces/generals';

@Component({
  selector: 'stf-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    StfTextComponent,
    StfIconComponent,
    StfButtonComponent
  ],
  templateUrl: './stf-datepicker.component.html',
  styleUrl: './stf-datepicker.component.scss'
})
export class StfDatepickerComponent {
  isOpen = false;
  months: Array<IMonth> = [
    {
      id: 1,
      name: 'Enero',
    },
    {
      id: 2,
      name: 'Febrero',
    },
    {
      id: 3,
      name: 'Marzo',
    },
    {
      id: 4,
      name: 'Abril',
    },
    {
      id: 5,
      name: 'Mayo',
    },
    {
      id: 6,
      name: 'Junio',
    },
    {
      id: 7,
      name: 'Julio',
    },
    {
      id: 8,
      name: 'Agosto',
    },
    {
      id: 9,
      name: 'Septiembre',
    },
    {
      id: 10,
      name: 'Octubre',
    },
    {
      id: 11,
      name: 'Noviembre',
    },
    {
      id: 12,
      name: 'Diciembre',
    },
  ];

  years: number[] = [];

  dateSelectedDescription = computed(() => `${this.monthSelected().name} ${this.yearSelected()}`);

  yearSelected: WritableSignal<number | ''> = signal('');
  monthSelected: WritableSignal<IMonth> = signal({
    id: 0,
    name: '',
  });

  ngOnInit() {
    this.years = this.getLastXYears(100);
  }

  selectMonth(month: any) {
    this.monthSelected.set(month)
  }

  selectYear(year: number) {
    this.yearSelected.set(year)
    console.log(this.yearSelected());
  }

  getLastXYears(cantidad: number): number[] {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser un número positivo');
    }

    const anioActual = new Date().getFullYear();
    const ultimosAnios: number[] = [];

    for (let i = 0; i < cantidad; i++) {
      ultimosAnios.push(anioActual - i);
    }

    return ultimosAnios;
  }


  getIcon() {
    return !this.isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  }
}
