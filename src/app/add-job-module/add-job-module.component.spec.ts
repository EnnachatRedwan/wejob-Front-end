import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobModuleComponent } from './add-job-module.component';

describe('AddJobModuleComponent', () => {
  let component: AddJobModuleComponent;
  let fixture: ComponentFixture<AddJobModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobModuleComponent]
    });
    fixture = TestBed.createComponent(AddJobModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
