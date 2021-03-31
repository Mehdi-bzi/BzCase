import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCreatorViewComponent } from './garage-creator-view.component';

describe('GarageCreatorViewComponent', () => {
  let component: GarageCreatorViewComponent;
  let fixture: ComponentFixture<GarageCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageCreatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
