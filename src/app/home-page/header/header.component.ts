import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService, clockModel } from 'src/app/services/clock.service';
import { Quotes } from 'src/app/mocks/default.quotes';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent implements OnInit {
  data: Observable<clockModel>;
  hour: number;
  minutes: string;
  horary: string;
  seconds: string;
  quotes = Quotes;
  quote: string;

  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.data = this.clockService.getHour();
    this.data.subscribe((x) => {
      this.hour = x.hour;
      this.minutes = x.minutes;
      this.horary = x.horary;
      this.seconds = x.seconds;
    });
    
    console.log(this.quotes[getRandomInt(20)]);
    this.quote = this.quotes[getRandomInt(20)];
  }

}
