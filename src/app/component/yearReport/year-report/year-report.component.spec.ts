import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearReportComponent } from './year-report.component';

describe('YearReportComponent', () => {
  let component: YearReportComponent;
  let fixture: ComponentFixture<YearReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
