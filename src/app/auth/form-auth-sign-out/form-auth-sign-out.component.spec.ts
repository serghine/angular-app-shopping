import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthSignOutComponent } from './form-auth-sign-out.component';

describe('FormAuthSignOutComponent', () => {
  let component: FormAuthSignOutComponent;
  let fixture: ComponentFixture<FormAuthSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthSignOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
