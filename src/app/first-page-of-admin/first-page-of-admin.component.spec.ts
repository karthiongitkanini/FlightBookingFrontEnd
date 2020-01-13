import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageOfAdminComponent } from './first-page-of-admin.component';

describe('FirstPageOfAdminComponent', () => {
  let component: FirstPageOfAdminComponent;
  let fixture: ComponentFixture<FirstPageOfAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageOfAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
