import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCreatorViewComponent } from './ad-creator-view.component';

describe('AdCreatorViewComponent', () => {
  let component: AdCreatorViewComponent;
  let fixture: ComponentFixture<AdCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCreatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
