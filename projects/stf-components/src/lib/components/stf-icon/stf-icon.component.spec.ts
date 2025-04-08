import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfIconComponent } from './stf-icon.component';

describe('StfIconComponent', () => {
  let component: StfIconComponent;
  let fixture: ComponentFixture<StfIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
