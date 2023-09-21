import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Job } from './jobs/Job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  baseUrl = 'http://localhost:8080';

  jobs: Job[] = [];

  constructor(private http: HttpClient) {}

  public fetchJobs(): void {
    this.http
      .get<Job[]>(`${this.baseUrl}/jobs`)
      .subscribe((jobsResponse) => (this.jobs = jobsResponse));
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
      },
      (err) => {
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
    let oldJob: Job = {...this.jobs[jobToEditInedx]};

    this.jobs[jobToEditInedx] = job;

    this.http.put<Job>(`${this.baseUrl}/jobs`, job).subscribe(
      (_) => {},
      (_) => {
        console.log(oldJob);
        this.jobs[jobToEditInedx] = oldJob;
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
      () => {},
      (err) => {
        this.jobs.splice(jobToDeleteInedx, 0, jobToDelete);
      }
    );
  }
}
