import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlanBelvedereComponent } from 'app/plan-belvedere/plan-belvedere.component';
import { SituationGeographiqueComponent } from 'app/situation-geographique/situation-geographique.component';
import { DateTarifComponent } from 'app/date-tarif/date-tarif.component';
import { LiensUtilesComponent } from 'app/liens-utiles/liens-utiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'plan', component: PlanBelvedereComponent },
  { path: 'situationgeographique', component: SituationGeographiqueComponent },
  { path: 'datetarif', component: DateTarifComponent },
  { path: 'liensutiles', component: LiensUtilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
