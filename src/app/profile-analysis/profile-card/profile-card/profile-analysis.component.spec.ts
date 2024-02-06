import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnalysisComponent } from './profile-analysis.component';

describe('ProfileCardComponent', () => {
  let component: ProfileAnalysisComponent;
  let fixture: ComponentFixture<ProfileAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAnalysisComponent]
    });
    fixture = TestBed.createComponent(ProfileAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
