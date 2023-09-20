import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobModuleComponent } from './delete-job-module.component';

describe('DeleteJobModuleComponent', () => {
  let component: DeleteJobModuleComponent;
  let fixture: ComponentFixture<DeleteJobModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteJobModuleComponent]
    });
    fixture = TestBed.createComponent(DeleteJobModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
