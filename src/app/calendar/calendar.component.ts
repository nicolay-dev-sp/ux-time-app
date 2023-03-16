import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  model: NgbDateStruct;
	date: { year: number; month: number };

  constructor(private router: Router,
    private calendar: NgbCalendar) { }

  ngOnInit() {}

  moveToHome() {
    this.router.navigate(['home']);

  }

  selectToday() {
		this.model = this.calendar.getToday();
	}
}
