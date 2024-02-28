import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { LiveFootballComponent } from './live-football/live-football.component';
import { ClassementComponent } from './classement/classement.component';
import { NouvellesComponent } from './nouvelles/nouvelles.component';


const routes: Routes = [
  {path:'',redirectTo: 'TableauDeBordComponent',pathMatch:'full'},
  {path:'tableau-de-bord',component: TableauDeBordComponent},
  {path:'live-football',component: LiveFootballComponent},
  {path:'classement',component:ClassementComponent},
  {path:'Nouvelles',component:NouvellesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
