import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomvalidationComponent } from './fomvalidation.component';

describe('FomvalidationComponent', () => {
  let component: FomvalidationComponent;
  let fixture: ComponentFixture<FomvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
