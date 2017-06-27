import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIceScrumComponent } from './login-ice-scrum.component';

describe('LoginIceScrumComponent', () => {
  let component: LoginIceScrumComponent;
  let fixture: ComponentFixture<LoginIceScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginIceScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIceScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
