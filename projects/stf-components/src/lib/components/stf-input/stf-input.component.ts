import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { StfIconComponent } from '../stf-icon/stf-icon.component';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'stf-input',
  standalone: true,
  imports: [CommonModule, StfIconComponent, ReactiveFormsModule],
  templateUrl: './stf-input.component.html',
  styleUrl: './stf-input.component.scss'
})
export class StfInputComponent {
  @Output() emitInput = new EventEmitter();
  @Output() emitEnter = new EventEmitter();
  @Input({ alias: 'stf-label' }) label: string = '';
  @Input({ alias: 'stf-icon' }) icon: string = '';
  @Input({ alias: 'stf-pattern' }) pattern: string = '';
  @Input({ alias: 'stf-value' }) value: string = '';
  @Input({ alias: 'stf-type' }) stfType: string = 'text';

  valueInput = new FormControl('', [this.processValidate()]);
  errorDescription = '';
  hasChanged = false;
  wasFocussed = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {

  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.valueInput.setValue(this.value);
    this.valueInput.valueChanges
      .pipe(
        debounceTime(500), // Espera 500ms después de la última tecla antes de ejecutar la búsqueda
        distinctUntilChanged(), // Evita peticiones si el valor no cambió
      )
      .subscribe((results) => {
        this.hasChanged = true;
        this.emitInput.emit(results);
        // this.itemsProcessed = this.items.filter((item) => item.value.toLowerCase().includes(results!.toLowerCase()));
      });

    if (this.pattern) {
      this.checkPattern();
    }
  }

  eventEnter() {
    this.emitEnter.emit();
  }

  processClassValid(type: string) {
    const successValidated = new RegExp(this.pattern).test(this.valueInput.value!);
    if (type === 'border') {
      if (!this.hasChanged && !this.wasFocussed) {
        return '--border-black';
      }

      if (!successValidated) {
        return '--border-danger-2';
      } else {
        return '--border-success-2';
      }
    }

    if (type === 'color') {
      if (!this.hasChanged && !this.wasFocussed) {
        return '--color-black';
      }

      if (!successValidated) {
        return '--color-danger';
      } else {
        return '--color-success';
      }
    }

    if (type === 'color-style') {
      if (!this.hasChanged && !this.wasFocussed) {
        return 'var(--color-black)';
      }

      if (!successValidated) {
        return 'var(--color-danger)';
      } else {
        return 'var(--color-success)';
      }
    }
    return '';
  }

  checkPattern() {
    try {
      new RegExp(this.pattern);
      return true;
    } catch (error: any) {
      this.errorDescription = 'hay un error en el pattern ingresado...';
      return false;
    }
  }

  getMessageError(error: any) {
    this.wasFocussed = true;
    return error.errorMessage;
  }

  processValidate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!this.checkPattern()) {
        return null;
      }
      const value = control.value;

      const hasUpperCase = new RegExp(this.pattern).test(value);
      return hasUpperCase ? null : { errorMessage: 'El dato ingresado no es válido' };
    }
  }
}
