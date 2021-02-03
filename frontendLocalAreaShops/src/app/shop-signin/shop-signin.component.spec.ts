import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSigninComponent } from './shop-signin.component';

describe('ShopSigninComponent', () => {
  let component: ShopSigninComponent;
  let fixture: ComponentFixture<ShopSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
