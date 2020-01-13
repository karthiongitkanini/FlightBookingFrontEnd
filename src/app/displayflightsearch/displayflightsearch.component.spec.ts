import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayflightsearchComponent } from './displayflightsearch.component';

describe('DisplayflightsearchComponent', () => {
  let component: DisplayflightsearchComponent;
  let fixture: ComponentFixture<DisplayflightsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayflightsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayflightsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
