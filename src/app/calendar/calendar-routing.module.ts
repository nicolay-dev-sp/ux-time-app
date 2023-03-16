import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgbAccordionModule, NgbCalendar, NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  imports: [NgbAccordionModule, NgbDatepickerModule, CommonModule, RouterModule.forChild(routes), IonicModule.forRoot()],
  providers:[],
  declarations: [CalendarComponent],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
