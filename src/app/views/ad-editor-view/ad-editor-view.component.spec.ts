import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditorViewComponent } from './ad-editor-view.component';

describe('AdEditorViewComponent', () => {
  let component: AdEditorViewComponent;
  let fixture: ComponentFixture<AdEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdEditorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
