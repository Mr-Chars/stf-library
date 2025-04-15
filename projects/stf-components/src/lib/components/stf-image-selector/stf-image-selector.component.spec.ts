import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfImageSelectorComponent } from './stf-image-selector.component';

describe('StfImageSelectorComponent', () => {
  let component: StfImageSelectorComponent;
  let fixture: ComponentFixture<StfImageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfImageSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
