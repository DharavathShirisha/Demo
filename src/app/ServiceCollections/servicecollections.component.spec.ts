import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecollectionsComponent } from './servicecollections.component';

describe('ServicecollectionsComponent', () => {
  let component: ServicecollectionsComponent;
  let fixture: ComponentFixture<ServicecollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
