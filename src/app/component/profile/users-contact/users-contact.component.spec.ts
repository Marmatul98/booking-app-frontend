import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersContactComponent} from './users-contact.component';

describe('UsersContactComponent', () => {
  let component: UsersContactComponent;
  let fixture: ComponentFixture<UsersContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersContactComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
