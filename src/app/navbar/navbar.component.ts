import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  jobFormOpen = false;

  openJobFormModule() {
    this.jobFormOpen = true;
  }
  closeJobFormModule() {
    this.jobFormOpen = false;
  }
}
