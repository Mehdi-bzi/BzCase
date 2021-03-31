import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatorViewComponent } from './user-creator-view.component';

describe('UserCreatorViewComponent', () => {
  let component: UserCreatorViewComponent;
  let fixture: ComponentFixture<UserCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
