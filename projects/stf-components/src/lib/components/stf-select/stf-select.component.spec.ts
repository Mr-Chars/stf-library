import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfSelectComponent } from './stf-select.component';

describe('StfSelectComponent', () => {
  let component: StfSelectComponent;
  let fixture: ComponentFixture<StfSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
