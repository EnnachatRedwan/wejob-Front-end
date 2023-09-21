import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs/jobs.component';
import { JobService } from './job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JobComponent } from './job/job.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddJobModuleComponent } from './add-job-module/add-job-module.component';
import { DeleteJobModuleComponent } from './delete-job-module/delete-job-module.component';
import { EditJobModuleComponent } from './edit-job-module/edit-job-module.component';
import { FlashMessagaeComponent } from './flash-messagae/flash-messagae.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    NavbarComponent,
    AddJobModuleComponent,
    DeleteJobModuleComponent,
    EditJobModuleComponent,
    FlashMessagaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JobService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
