import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfSkeletonScreenComponent } from './stf-skeleton-screen.component';

describe('StfSkeletonScreenComponent', () => {
  let component: StfSkeletonScreenComponent;
  let fixture: ComponentFixture<StfSkeletonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfSkeletonScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfSkeletonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
