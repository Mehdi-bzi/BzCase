import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageSingleViewComponent } from './garage-single-view.component';

describe('GarageSingleViewComponent', () => {
  let component: GarageSingleViewComponent;
  let fixture: ComponentFixture<GarageSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
