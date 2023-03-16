import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page-routing.module').then(m => m.HomePageRoutingModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit-routing.module').then(m => m.EditRoutingModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar-routing.module').then(m => m.CalendarRoutingModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
