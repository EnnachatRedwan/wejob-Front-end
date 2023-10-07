import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../jobs/Job';
import { JobService } from '../job.service';
import { FlashMessageService } from '../flash-message.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  job: Job = { id: -1, title: '', location: '', descr: '' };
  error = false;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private flashMessageService: FlashMessageService
  ) {}


  isLoading = false;

  ngOnInit(): void {
    this.isLoading=true;
    this.route.paramMap.subscribe((params) => {
      const jobId = Number(params.get('id'));
      this.jobService.fetchJob(jobId).subscribe(
        (job) => {
          this.error=false;
          this.job = job;
          this.isLoading=false;
        },
        () => {
          this.error = true;
          this.flashMessageService.showMessage({
            message: `Bad internet or item does not exists`,
            type: 'ERROR',
          });
          this.isLoading=false;
        }
      );
    });
  }
}
