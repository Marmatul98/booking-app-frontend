import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SportsHallComponent} from './sports-hall.component';

describe('SportsHallComponent', () => {
  let component: SportsHallComponent;
  let fixture: ComponentFixture<SportsHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsHallComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
