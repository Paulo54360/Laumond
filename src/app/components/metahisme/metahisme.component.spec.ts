import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahismeComponent } from './metahisme.component';

describe('MetahismeComponent', () => {
  let component: MetahismeComponent;
  let fixture: ComponentFixture<MetahismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetahismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
