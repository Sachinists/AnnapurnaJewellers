import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepresentativeLoginComponent } from './sales-representative-login.component';

describe('SalesRepresentativeLoginComponent', () => {
  let component: SalesRepresentativeLoginComponent;
  let fixture: ComponentFixture<SalesRepresentativeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepresentativeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepresentativeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
