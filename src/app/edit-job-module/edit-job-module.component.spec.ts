import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobModuleComponent } from './edit-job-module.component';

describe('EditJobModuleComponent', () => {
  let component: EditJobModuleComponent;
  let fixture: ComponentFixture<EditJobModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJobModuleComponent]
    });
    fixture = TestBed.createComponent(EditJobModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
