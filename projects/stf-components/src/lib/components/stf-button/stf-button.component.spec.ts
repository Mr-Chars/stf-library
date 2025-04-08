import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfButtonComponent } from './stf-button.component';

describe('StfButtonComponent', () => {
  let component: StfButtonComponent;
  let fixture: ComponentFixture<StfButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
