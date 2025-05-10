import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfIconDropdownComponent } from './stf-icon-dropdown.component';

describe('StfIconDropdownComponent', () => {
  let component: StfIconDropdownComponent;
  let fixture: ComponentFixture<StfIconDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfIconDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfIconDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
