import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorViewComponent } from './user-editor-view.component';

describe('UserEditorViewComponent', () => {
  let component: UserEditorViewComponent;
  let fixture: ComponentFixture<UserEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
