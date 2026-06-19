import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProducts } from './category-products';
import {
  activatedRouteStub,
  testAppProviders,
} from '../testing/test-providers';

describe('CategoryProducts', () => {
  let component: CategoryProducts;
  let fixture: ComponentFixture<CategoryProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProducts],
      providers: [
        ...testAppProviders(),
        activatedRouteStub({ name: 'Laptop' }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
