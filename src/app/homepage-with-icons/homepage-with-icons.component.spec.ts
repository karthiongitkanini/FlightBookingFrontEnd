import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWithIconsComponent } from './homepage-with-icons.component';

describe('HomepageWithIconsComponent', () => {
  let component: HomepageWithIconsComponent;
  let fixture: ComponentFixture<HomepageWithIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWithIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
