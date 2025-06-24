import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaginatorComponent } from './naginator.component';

describe('NaginatorComponent', () => {
  let component: NaginatorComponent;
  let fixture: ComponentFixture<NaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
