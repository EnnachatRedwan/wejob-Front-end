import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Job } from './jobs/Job';
import { Observable } from 'rxjs';
import { FlashMessageService } from './flash-message.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  baseUrl = 'https://5n581194-8080.uks1.devtunnels.ms';

  jobs: Job[] = [];

  constructor(
    private http: HttpClient,
    private flashMessageService: FlashMessageService
  ) {
    // setInterval(() => this.fetchJobs(), 1000);
  }

  public isLoading = false;

  public fetchJobs(): void {
    this.isLoading = true;
    this.http.get<Job[]>(`${this.baseUrl}/jobs`).subscribe(
      (jobsResponse) => {
        this.jobs = jobsResponse;
        this.isLoading = false;
      },
      (err) => {
        this.flashMessageService.showMessage({
          message: `Opss error, check your internet`,
          type: 'ERROR',
        });
        this.isLoading=false;
      }
    );
  }

  public fetchJob(id: Number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/jobs/${id}`);
  }

  public addJob(job: Job): void {
    let tempJob = { ...job };
    tempJob.id = -1;
    this.jobs.push(tempJob);
    this.http.post<Job>(`${this.baseUrl}/jobs`, job).subscribe(
      (responseJob) => {
        this.jobs.forEach((j) =>
          j.id === -1 ? (this.jobs[this.jobs.indexOf(j)] = responseJob) : null
        );
        this.flashMessageService.showMessage({
          message: 'Job added successfully',
          type: 'SUCCESS',
        });
      },
      (err) => {
        this.flashMessageService.showMessage({
          message: `job was not added`,
          type: 'ERROR',
        });
        this.jobs.forEach((j) =>
          j.id === -1 ? this.jobs.splice(this.jobs.indexOf(j), 1) : null
        );
      }
    );
  }

  public editJob(job: Job): void {
    let jobToEditInedx = -1;
    this.jobs.forEach((j) => {
      if (j.id === job.id) {
        jobToEditInedx = this.jobs.indexOf(j);
      }
    });
    let oldJob: Job = { ...this.jobs[jobToEditInedx] };

    this.jobs[jobToEditInedx] = job;

    this.http.put<Job>(`${this.baseUrl}/jobs`, job).subscribe(
      (_) => {
        this.flashMessageService.showMessage({
          message: 'Job edited successfully',
          type: 'SUCCESS',
        });
      },
      (_) => {
        this.jobs[jobToEditInedx] = oldJob;
        this.flashMessageService.showMessage({
          message: `job was not edited`,
          type: 'ERROR',
        });
      }
    );
  }

  public deleteJob(id: Number): void {
    let jobToDeleteInedx = -1;
    this.jobs.forEach((j) => {
      if (j.id === id) {
        jobToDeleteInedx = this.jobs.indexOf(j);
      }
    });
    let jobToDelete: Job = this.jobs[jobToDeleteInedx];
    this.jobs = [...this.jobs].filter((job) => job.id !== id);

    this.http.delete<void>(`${this.baseUrl}/jobs/${id}`).subscribe(
      () => {
        this.flashMessageService.showMessage({
          message: 'Job deleted successfully',
          type: 'SUCCESS',
        });
      },
      (err) => {
        this.jobs.splice(jobToDeleteInedx, 0, jobToDelete);
        this.flashMessageService.showMessage({
          message: `job was not deleted`,
          type: 'ERROR',
        });
      }
    );
  }
}
