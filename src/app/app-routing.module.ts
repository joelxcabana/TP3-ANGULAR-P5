import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';


const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'novedades',component: NovedadesComponent },
  { path: 'afiliacion',component: AfiliacionComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
