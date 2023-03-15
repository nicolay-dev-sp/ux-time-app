import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClockService } from '../services/clock.service';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule.forRoot()],
  providers:[ClockService],
  declarations: [HomePageComponent, HeaderComponent, HomeBodyComponent],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
