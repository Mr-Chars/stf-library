import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfInputComponent } from './stf-input.component';

describe('StfInputComponent', () => {
  let component: StfInputComponent;
  let fixture: ComponentFixture<StfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
