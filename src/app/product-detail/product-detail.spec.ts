import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail } from './product-detail';
import {
  activatedRouteStub,
  testAppProviders,
} from '../testing/test-providers';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail],
      providers: [
        ...testAppProviders(),
        activatedRouteStub({ id: '1' }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
