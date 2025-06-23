import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfCardComponent } from './stf-card.component';

describe('StfCardComponent', () => {
  let component: StfCardComponent;
  let fixture: ComponentFixture<StfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
