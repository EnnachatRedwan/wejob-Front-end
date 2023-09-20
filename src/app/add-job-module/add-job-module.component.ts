import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../jobs/Job';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-job-module',
  templateUrl: './add-job-module.component.html',
  styleUrls: ['./add-job-module.component.css'],
})
export class AddJobModuleComponent {
  @Input()
  jobFormOpen: boolean = false;

  @Output()
  closeJobFormModule = new EventEmitter();

  closeModule() {
    this.closeJobFormModule.emit();
  }

  constructor(private jobService: JobService) {}

  addJob(form: NgForm) {
    this.jobService.addJob(form.value);
    this.closeModule();
    form.reset();
  }
}
