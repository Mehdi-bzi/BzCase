import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageEditorViewComponent } from './garage-editor-view.component';

describe('GarageEditorViewComponent', () => {
  let component: GarageEditorViewComponent;
  let fixture: ComponentFixture<GarageEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageEditorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
