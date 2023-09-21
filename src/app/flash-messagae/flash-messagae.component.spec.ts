import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashMessagaeComponent } from './flash-messagae.component';

describe('FlashMessagaeComponent', () => {
  let component: FlashMessagaeComponent;
  let fixture: ComponentFixture<FlashMessagaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashMessagaeComponent]
    });
    fixture = TestBed.createComponent(FlashMessagaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
