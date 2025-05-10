import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StfPaginationComponent } from './stf-pagination.component';

describe('StfPaginationComponent', () => {
  let component: StfPaginationComponent;
  let fixture: ComponentFixture<StfPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StfPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StfPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
