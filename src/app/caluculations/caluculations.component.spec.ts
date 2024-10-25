import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluculationsComponent } from './caluculations.component';

describe('CaluculationsComponent', () => {
  let component: CaluculationsComponent;
  let fixture: ComponentFixture<CaluculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaluculationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaluculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
