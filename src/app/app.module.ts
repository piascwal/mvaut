import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlanBelvedereComponent } from './plan-belvedere/plan-belvedere.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { SituationGeographiqueComponent } from './situation-geographique/situation-geographique.component';
import { DateTarifComponent } from './date-tarif/date-tarif.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanBelvedereComponent,
    SituationGeographiqueComponent,
    DateTarifComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
