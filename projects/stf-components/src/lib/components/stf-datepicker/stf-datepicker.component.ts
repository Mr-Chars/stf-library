import { Component, computed, ElementRef, EventEmitter, Input, Output, signal, ViewChild, WritableSignal } from '@angular/core';
import { StfTextComponent } from '../stf-text/stf-text.component';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { CommonModule } from '@angular/common';
import { StfButtonComponent } from '../stf-button/stf-button.component';
import { DiaCalendario, IMonth, SemanaCalendario } from '../../../interfaces/generals';

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
  @ViewChild('activatorElement') activatorElement!: ElementRef;
  @Input({ alias: 'stf-quantity-years' }) quantityYears = 10;
  @Output() emitDate = new EventEmitter<any>();
  isOpen = false;
  months: Array<IMonth> = [
    {
      id: '01',
      name: 'Enero',
    },
    {
      id: '02',
      name: 'Febrero',
    },
    {
      id: '03',
      name: 'Marzo',
    },
    {
      id: '04',
      name: 'Abril',
    },
    {
      id: '05',
      name: 'Mayo',
    },
    {
      id: '06',
      name: 'Junio',
    },
    {
      id: '07',
      name: 'Julio',
    },
    {
      id: '08',
      name: 'Agosto',
    },
    {
      id: '09',
      name: 'Septiembre',
    },
    {
      id: '10',
      name: 'Octubre',
    },
    {
      id: '11',
      name: 'Noviembre',
    },
    {
      id: '12',
      name: 'Diciembre',
    },
  ];

  step = 1;
  years: number[] = [];

  dateSelected = 'dd-mm-yyyy';

  dateSelectedDescription = computed(() => {
    let textProcessed = ``;

    if (this.yearSelected()) {
      textProcessed = `${this.yearSelected()}`;
    }
    if (this.monthSelected().name) {
      textProcessed = `${this.monthSelected().name} del ${textProcessed}`;
    }
    if (this.daySelected()) {
      textProcessed = `${this.daySelected()} de ${textProcessed}`;
    }
    return `${textProcessed}`;
  });

  yearSelected: WritableSignal<number | ''> = signal('');
  monthSelected: WritableSignal<IMonth> = signal({
    id: '',
    name: '',
  });
  daySelected: WritableSignal<number | ''> = signal('');

  calendarioSemanas: SemanaCalendario[] = [];
  openDirection = 'up';
  ngOnInit() {
    this.years = this.getLastXYears(this.quantityYears);
  }

  openWindow() {
    if (!this.isOpen) {
      const rect = this.activatorElement.nativeElement.getBoundingClientRect();
      console.log(window.innerHeight);
      console.log(rect);
      const calendarHeight = 300;

      if (window.innerHeight - rect.bottom < calendarHeight) {
        this.openDirection = 'up';
      } else {
        this.openDirection = 'down';
      }
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  setAndEmitDate() {
    this.dateSelected = `${this.daySelected()}-${this.monthSelected().name}-${this.yearSelected()}`;
    this.isOpen = false;
    this.emitDate.emit({
      day: this.daySelected(),
      month: this.monthSelected(),
      year: this.yearSelected(),
      ddmmyyyy: `${this.daySelected()}-${this.monthSelected().id}-${this.yearSelected()}`,
    });
  }

  backToChooseMonthAndYear() {
    this.step = 1;
    this.daySelected.set('');
  }
  avaibleToProcessDay() {
    return +this.yearSelected() > 0 && this.monthSelected().id;
  }

  getDays() {
    if (!this.avaibleToProcessDay()) {
      return;
    }
    this.calendarioSemanas = []; // Limpiar antes de generar
    const semanas: SemanaCalendario[] = [];

    const primerDiaMes = new Date(+this.yearSelected(), +this.monthSelected().id - 1, 1);
    const ultimoDiaMes = new Date(+this.yearSelected(), +this.monthSelected().id, 0);

    let primerDiaSemana = primerDiaMes.getDay(); // 0=Dom, 1=Lun, ...
    if (primerDiaSemana === 0) {
      primerDiaSemana = 6; // Convertir Domingo (0) a 6 para que Lunes sea 0
    } else {
      primerDiaSemana--; // Lunes (1) -> 0, Martes (2) -> 1, etc.
    }

    let diaActual = 1;
    let diasDelMes = ultimoDiaMes.getDate();

    // Días del mes anterior para rellenar
    const ultimoDiaMesAnterior = new Date(+this.yearSelected(), +this.monthSelected().id - 1, 0).getDate();
    const diasMesAnterior: number[] = [];
    for (let i = primerDiaSemana - 1; i >= 0; i--) {
      diasMesAnterior.push(ultimoDiaMesAnterior - i);
    }

    while (diaActual <= diasDelMes || semanas.length * 7 < (primerDiaSemana + diasDelMes)) {
      const semana: (DiaCalendario | null)[] = [];

      for (let i = 0; i < 7; i++) {
        if (semanas.length === 0 && i < primerDiaSemana) {
          semana.push({ number: diasMesAnterior[i], isFromCurrentMonth: false });
        } else if (diaActual <= diasDelMes) {
          semana.push({ number: diaActual, isFromCurrentMonth: true });
          diaActual++;
        } else {
          // Rellenar con días del mes siguiente (resetear el contador del día para el siguiente mes)
          semana.push({ number: (diaActual - diasDelMes), isFromCurrentMonth: false });
          diaActual++; // Simplemente incrementa para seguir contando en la lógica
        }
      }
      semanas.push({ dias: semana });
    }

    this.calendarioSemanas = semanas;
    // this.nombreMesActual = this.obtenerNombreMes(this.mes);
    this.step = 2;
  }

  selectDay(day: any) {
    if (!day.isFromCurrentMonth) {
      return;
    }
    this.daySelected.set(day.number);
  }

  selectMonth(month: any) {
    this.monthSelected.set(month)
  }

  selectYear(year: number) {
    this.yearSelected.set(year)
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
