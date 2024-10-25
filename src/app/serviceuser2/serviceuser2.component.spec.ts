import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceuser2Component } from './serviceuser2.component';

describe('Serviceuser2Component', () => {
  let component: Serviceuser2Component;
  let fixture: ComponentFixture<Serviceuser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serviceuser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviceuser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
