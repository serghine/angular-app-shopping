import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthSignInComponent } from './form-auth-sign-in.component';

describe('FormAuthSignInComponent', () => {
  let component: FormAuthSignInComponent;
  let fixture: ComponentFixture<FormAuthSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
