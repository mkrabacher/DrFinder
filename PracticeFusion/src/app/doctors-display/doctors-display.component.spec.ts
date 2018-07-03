import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDisplayComponent } from './doctors-display.component';

describe('DoctorsDisplayComponent', () => {
  let component: DoctorsDisplayComponent;
  let fixture: ComponentFixture<DoctorsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
