import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSingleViewComponent } from './ad-single-view.component';

describe('AdSingleViewComponent', () => {
  let component: AdSingleViewComponent;
  let fixture: ComponentFixture<AdSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
