import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographieComponent } from './biographie.component';

describe('BiographieComponent', () => {
  let component: BiographieComponent;
  let fixture: ComponentFixture<BiographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiographieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
