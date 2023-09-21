import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../jobs/Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent {
  @Input()
  job: Job = <Job>{};

  @Output()
  openJobDeleteForm = new EventEmitter();

  openDeleteFormHandler(){
    this.openJobDeleteForm.emit(this.job);
  }

  @Output()
  openJobEditForm = new EventEmitter();

  openEditFormHandler(){
    this.openJobEditForm.emit(this.job);
  }
}
