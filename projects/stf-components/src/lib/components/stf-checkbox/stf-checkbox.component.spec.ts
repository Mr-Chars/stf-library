import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfCheckboxComponent } from './stf-checkbox.component';

describe('StfCheckboxComponent', () => {
  let component: StfCheckboxComponent;
  let fixture: ComponentFixture<StfCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
