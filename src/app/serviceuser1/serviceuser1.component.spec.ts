import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceuser1Component } from './serviceuser1.component';

describe('Serviceuser1Component', () => {
  let component: Serviceuser1Component;
  let fixture: ComponentFixture<Serviceuser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serviceuser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviceuser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
