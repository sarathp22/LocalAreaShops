import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTokensComponent } from './shop-tokens.component';

describe('ShopTokensComponent', () => {
  let component: ShopTokensComponent;
  let fixture: ComponentFixture<ShopTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
