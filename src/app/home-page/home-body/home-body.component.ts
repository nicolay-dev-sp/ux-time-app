import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBodyComponent implements OnInit {

  disabled = true;

  constructor(private router:Router) { }

  ngOnInit() {}

  moveToEdit() {
    this.router.navigate(['edit']);
  }

  moveToCalendar() {
    this.router.navigate(['calendar']);
  }

}
