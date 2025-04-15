import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfInputColorComponent } from './stf-input-color.component';

describe('StfInputColorComponent', () => {
  let component: StfInputColorComponent;
  let fixture: ComponentFixture<StfInputColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfInputColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfInputColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
