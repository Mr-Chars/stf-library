import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StfTextComponent } from '../stf-text/stf-text.component';
import { StfButtonComponent } from '../stf-button/stf-button.component';

@Component({
  selector: 'stf-input-color',
  standalone: true,
  imports: [CommonModule, FormsModule, StfTextComponent, StfButtonComponent],
  templateUrl: './stf-input-color.component.html',
  styleUrl: './stf-input-color.component.scss'
})
export class StfInputColorComponent implements AfterViewInit {
  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @Input({ alias: 'stf-value' }) value: string = '#ff0000';
  @Output() emitInputColor = new EventEmitter();
  @ViewChild('hueWheelCanvas') hueWheelCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('colorPickerCanvas') colorPickerCanvasRef!: ElementRef<HTMLCanvasElement>;

  private hueWheelCtx!: CanvasRenderingContext2D;
  private colorPickerCtx!: CanvasRenderingContext2D;

  hueValue: number = 0;
  hueCursorTransform: string = 'translate(100px, 100px)';

  colorSelected = {
    rgb: '255, 0, 0',
    hex: '#ff0000',
  }
  colorPreview = {
    rgb: '255, 0, 0',
    hex: '#ff0000',
  }

  isOpen = signal(false);
  selectedColor = signal('#3f51b5');

  ngOnInit() {
    this.colorSelected.hex = this.value;
    this.selectedColor = signal(this.value);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.mainContainer && !this.mainContainer.nativeElement.contains(event.target)) {
      this.isOpen.update(prev => false);
    }
  }

  ngAfterViewInit() {
    this.hueWheelCtx = this.hueWheelCanvasRef.nativeElement.getContext('2d')!;
    this.colorPickerCtx = this.colorPickerCanvasRef.nativeElement.getContext('2d')!;

    this.drawHueWheel();
    this.updateColorGradient();
  }

  togglePicker() {
    this.isOpen.update(prev => !prev);
  }

  selectColor() {
    this.selectedColor = signal(this.colorSelected.hex);
    this.emitInputColor.emit(this.colorSelected);
    this.togglePicker();
  }

  // Dibuja el círculo cromático
  private drawHueWheel() {
    const canvas = this.hueWheelCanvasRef.nativeElement;
    const radius = canvas.width / 2;
    const centerX = radius;
    const centerY = radius;

    for (let angle = 0; angle < 360; angle++) {
      const startAngle = (angle - 2) * Math.PI / 180;
      const endAngle = angle * Math.PI / 180;

      this.hueWheelCtx.beginPath();
      this.hueWheelCtx.moveTo(centerX, centerY);
      this.hueWheelCtx.arc(centerX, centerY, radius, startAngle, endAngle);
      this.hueWheelCtx.closePath();

      this.hueWheelCtx.fillStyle = `hsl(${angle}, 100%, 50%)`;
      this.hueWheelCtx.fill();
    }
  }

  // Detecta la posición en el círculo cromático
  private getHueFromWheel(event: MouseEvent): number {
    const canvas = this.hueWheelCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - canvas.width / 2;
    const y = event.clientY - rect.top - canvas.height / 2;

    let angle = Math.atan2(y, x) * 180 / Math.PI;
    if (angle < 0) angle += 360;

    return Math.round(angle);
  }

  onHueWheelMove(event: MouseEvent) {
    if (event.buttons === 1) { // Solo si el botón está presionado
      this.hueValue = this.getHueFromWheel(event);
      this.updateCursorPosition();
      this.updateColorGradient();
    }
  }

  onHueWheelClick(event: MouseEvent) {
    this.hueValue = this.getHueFromWheel(event);
    this.updateCursorPosition();
    this.updateColorGradient();
  }

  // Actualiza la posición del cursor en el círculo
  private updateCursorPosition() {
    const angle = this.hueValue * Math.PI / 180;
    const radius = this.hueWheelCanvasRef.nativeElement.width / 2;
    const x = radius + radius * 0.9 * Math.cos(angle);
    const y = radius + radius * 0.9 * Math.sin(angle);

    this.hueCursorTransform = `translate(${x}px, ${y}px)`;
  }

  // Actualiza el degradado según el matiz seleccionado
  updateColorGradient() {
    const canvas = this.colorPickerCanvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    // Limpia el canvas
    this.colorPickerCtx.clearRect(0, 0, width, height);

    // Crea un degradado horizontal (saturación)
    const saturationGradient = this.colorPickerCtx.createLinearGradient(0, 0, width, 0);
    saturationGradient.addColorStop(0, '#fff');
    saturationGradient.addColorStop(1, `hsl(${this.hueValue}, 100%, 50%)`);

    // Crea un degradado vertical (luminosidad)
    const lightnessGradient = this.colorPickerCtx.createLinearGradient(0, 0, 0, height);
    lightnessGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    lightnessGradient.addColorStop(1, '#000');

    // Aplica ambos degradados
    this.colorPickerCtx.fillStyle = saturationGradient;
    this.colorPickerCtx.fillRect(0, 0, width, height);
    this.colorPickerCtx.fillStyle = lightnessGradient;
    this.colorPickerCtx.fillRect(0, 0, width, height);
  }

  // Obtiene el color en la posición del mouse
  onMouseMove(event: MouseEvent) {
    const { r, g, b } = this.getColorAtPosition(event);

    this.colorPreview = {
      rgb: this.processColor(r, g, b).rgb,
      hex: this.processColor(r, g, b).hex,
    }
  }

  // Selecciona el color al hacer clic
  onColorSelect(event: MouseEvent) {
    const { r, g, b } = this.getColorAtPosition(event);

    this.colorSelected = {
      rgb: this.processColor(r, g, b).rgb,
      hex: this.processColor(r, g, b).hex,
    }
  }

  private getColorAtPosition(event: MouseEvent) {
    const canvas = this.colorPickerCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixelData = this.colorPickerCtx.getImageData(x, y, 1, 1).data;
    return { r: pixelData[0], g: pixelData[1], b: pixelData[2] };
  }

  private processColor(r: number, g: number, b: number) {
    return {
      colorProcessed: `rgb(${r}, ${g}, ${b})`,
      rgb: `${r}, ${g}, ${b}`,
      hex: this.rgbToHex(r, g, b),
    }
  }

  private rgbToHex(r: number, g: number, b: number): string {
    return `#${[r, g, b].map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }
}
