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

  jobDeleteFormOpen = false;

  openJobDeleteForm(job : Job) {
    this.jobToDelete = job;
    this.jobDeleteFormOpen = true;
  }
  closeJobDeleteForm() {
    this.jobDeleteFormOpen = false;
    this.jobToDelete=undefined;
  }

  jobToDelete?: Job= undefined;

  ngOnInit(): void {
    this.jobService.fetchJobs();
  }

  getJobs(): Job[] {
    return this.jobService.jobs;
  }

  deleteJob(id: Number) {
    this.closeJobDeleteForm()
    this.jobService.deleteJob(id);
  }
}
