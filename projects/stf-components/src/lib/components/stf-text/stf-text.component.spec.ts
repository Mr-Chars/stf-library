import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfTextComponent } from './stf-text.component';

describe('StfTextComponent', () => {
  let component: StfTextComponent;
  let fixture: ComponentFixture<StfTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
