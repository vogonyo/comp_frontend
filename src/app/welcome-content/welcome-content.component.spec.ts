import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeContentComponent } from './welcome-content.component';

describe('WelcomeContentComponent', () => {
  let component: WelcomeContentComponent;
  let fixture: ComponentFixture<WelcomeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeContentComponent]
    });
    fixture = TestBed.createComponent(WelcomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
