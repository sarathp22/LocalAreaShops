import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTokenViewComponent } from './user-token-view.component';

describe('UserTokenViewComponent', () => {
  let component: UserTokenViewComponent;
  let fixture: ComponentFixture<UserTokenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTokenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
