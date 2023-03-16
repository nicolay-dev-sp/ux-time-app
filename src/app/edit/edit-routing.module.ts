import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageRoutingModule } from '../home-page/home-page-routing.module';
import { HomePageModule } from '../home-page/home-page.module';
import { ClockService } from '../services/clock.service';
import { EditComponent } from './edit.component';

const routes: Routes = [
  {
    path: '',
    component: EditComponent,
  },
];

@NgModule({
  imports: [NgbAccordionModule, CommonModule, RouterModule.forChild(routes), IonicModule.forRoot()],
  providers:[],
  declarations: [EditComponent],
  exports: [RouterModule]
})
export class EditRoutingModule {}
