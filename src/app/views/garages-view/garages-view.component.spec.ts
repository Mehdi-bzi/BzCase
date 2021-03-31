import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesViewComponent } from './garages-view.component';

describe('GaragesViewComponent', () => {
  let component: GaragesViewComponent;
  let fixture: ComponentFixture<GaragesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaragesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
