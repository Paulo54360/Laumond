import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUpPageComponent } from './button-up-page.component';

describe('ButtonUpPageComponent', () => {
  let component: ButtonUpPageComponent;
  let fixture: ComponentFixture<ButtonUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
