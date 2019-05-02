import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this.startTimer();
  }

  navigatePage() {
    this.router.navigate(['/players']);
  }

}
