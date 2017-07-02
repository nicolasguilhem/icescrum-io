import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdIceScrumComponent } from './passwd-ice-scrum.component';

describe('PasswdIceScrumComponent', () => {
  let component: PasswdIceScrumComponent;
  let fixture: ComponentFixture<PasswdIceScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdIceScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdIceScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
