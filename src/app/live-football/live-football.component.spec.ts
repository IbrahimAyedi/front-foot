import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFootballComponent } from './live-football.component';

describe('LiveFootballComponent', () => {
  let component: LiveFootballComponent;
  let fixture: ComponentFixture<LiveFootballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveFootballComponent]
    });
    fixture = TestBed.createComponent(LiveFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
