import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopipescomponentComponent } from './demopipescomponent.component';

describe('DemopipescomponentComponent', () => {
  let component: DemopipescomponentComponent;
  let fixture: ComponentFixture<DemopipescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemopipescomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemopipescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
