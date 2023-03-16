import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ClockService } from '../services/clock.service';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [NgbAccordionModule, CommonModule, RouterModule.forChild(routes), IonicModule.forRoot()],
  providers:[ClockService],
  declarations: [HomePageComponent, HeaderComponent, HomeBodyComponent],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
