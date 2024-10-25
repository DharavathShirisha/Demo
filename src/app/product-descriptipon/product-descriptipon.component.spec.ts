import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptiponComponent } from './product-descriptipon.component';

describe('ProductDescriptiponComponent', () => {
  let component: ProductDescriptiponComponent;
  let fixture: ComponentFixture<ProductDescriptiponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescriptiponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescriptiponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
