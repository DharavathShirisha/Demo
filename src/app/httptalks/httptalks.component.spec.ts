import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptalksComponent } from './httptalks.component';

describe('HttptalksComponent', () => {
  let component: HttptalksComponent;
  let fixture: ComponentFixture<HttptalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttptalksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttptalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
