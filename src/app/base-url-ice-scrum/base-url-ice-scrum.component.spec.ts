import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUrlIceScrumComponent } from './base-url-ice-scrum.component';

describe('BaseUrlIceScrumComponent', () => {
  let component: BaseUrlIceScrumComponent;
  let fixture: ComponentFixture<BaseUrlIceScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseUrlIceScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseUrlIceScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
