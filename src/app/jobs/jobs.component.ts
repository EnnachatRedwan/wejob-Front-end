import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from './Job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.fetchJobs();
  }

  getJobs(): Job[] {
    return this.jobService.jobs;
  }


  jobToDelete?: Job = undefined;

  jobDeleteFormOpen = false;

  openJobDeleteForm(job: Job) {
    this.jobToDelete = job;
    this.jobDeleteFormOpen = true;
  }
  closeJobDeleteForm() {
    this.jobToDelete = undefined;
    this.jobDeleteFormOpen = false;
  }

  deleteJob(id: Number) {
    this.closeJobDeleteForm();
    this.jobService.deleteJob(id);
  }

  jobToEdit?: Job = undefined;

  jobEditFormOpen = false;

  openJobEditForm(job: Job) {
    this.jobToEdit = {...job};
    this.jobEditFormOpen = true;
  }
  closeJobEditForm() {
    this.jobToEdit = undefined;
    this.jobEditFormOpen = false;
  }

  editJob(job: Job) {
    this.closeJobEditForm();
    this.jobService.editJob(job);
  }
}
