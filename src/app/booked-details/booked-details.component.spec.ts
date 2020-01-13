import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedDetailsComponent } from './booked-details.component';

describe('BookedDetailsComponent', () => {
  let component: BookedDetailsComponent;
  let fixture: ComponentFixture<BookedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
