import { Injectable } from '@angular/core';
import {timer, Observable, Subject} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class clockModel {
  hour: number;
  minutes: string;
  horary: string;
  seconds: string;
}

export class ClockService {

  clock: Observable <Date>;
  infoDate$ = new Subject<clockModel>();
  vr: clockModel;
  horary: string;
  hours: number;
  minute: string;
  weekday: string;
  months: string;

  constructor() { 
    this.clock = timer(0,1000).pipe(map(t => new Date()),shareReplay(1));
  }

  getHour(): Observable<clockModel>{
    this.clock.subscribe(t => {
     this.hours = t.getHours() % 12;
     this.hours = this.hours ? this.hours : 12;
      this.vr = {
        hour: this.hours,
        minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
        horary: t.getHours() > 11 ? 'PM' : 'AM',
        seconds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()

      }
      this.infoDate$.next(this.vr);
    });
    return this.infoDate$.asObservable();

  }
}
