import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../jobs/Job';

@Component({
  selector: 'app-delete-job-module',
  templateUrl: './delete-job-module.component.html',
  styleUrls: ['./delete-job-module.component.css'],
})
export class DeleteJobModuleComponent {
  @Input()
  jobToDelete?: Job = undefined;

  @Output()
  deleteJob = new EventEmitter();

  @Output()
  closeJobDeleteForm = new EventEmitter();

  deleteJobHandler() {
    this.deleteJob.emit(this.jobToDelete?.id);
  }

  closeFormHandler(){
    this.closeJobDeleteForm.emit()
  }
}
