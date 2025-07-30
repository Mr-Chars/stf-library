import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfDatepickerComponent } from './stf-datepicker.component';

describe('StfDatepickerComponent', () => {
  let component: StfDatepickerComponent;
  let fixture: ComponentFixture<StfDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
