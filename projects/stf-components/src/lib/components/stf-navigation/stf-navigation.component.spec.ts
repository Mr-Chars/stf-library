import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfNavigationComponent } from './stf-navigation.component';

describe('StfNavigationComponent', () => {
  let component: StfNavigationComponent;
  let fixture: ComponentFixture<StfNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
