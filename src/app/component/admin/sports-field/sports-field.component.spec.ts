import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SportsFieldComponent} from './sports-field.component';

describe('SportsFieldComponent', () => {
  let component: SportsFieldComponent;
  let fixture: ComponentFixture<SportsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
