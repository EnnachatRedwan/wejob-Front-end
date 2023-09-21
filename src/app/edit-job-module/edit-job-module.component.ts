import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';
import { Job } from '../jobs/Job';

@Component({
  selector: 'app-edit-job-module',
  templateUrl: './edit-job-module.component.html',
  styleUrls: ['./edit-job-module.component.css'],
})
export class EditJobModuleComponent {
  @Input()
  jobToEdit?: Job = undefined;

  @Output()
  closeJobEditForm = new EventEmitter();

  closeModule() {
    this.closeJobEditForm.emit();
  }

  @Output()
  editJob = new EventEmitter();

  editJobHandler(form: NgForm) {
    this.editJob.emit({ ...this.jobToEdit, ...form.value });
    form.reset();
  }
}
