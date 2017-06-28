import { Component, OnInit } from '@angular/core';
import { Calendrier } from 'app/model/calendrier';

@Component({
  selector: 'app-date-tarif',
  templateUrl: './date-tarif.component.html',
  styleUrls: ['./date-tarif.component.css']
})
export class DateTarifComponent implements OnInit {
  calendrier: Calendrier[];
  constructor() { }

  ngOnInit() {
    this.calendrier = [
      { periode: 'Avril', derniereVisite: '17h', joursOuverture: [false, true, true, true, true, true, true]},
      { periode: 'Mai/Juin', derniereVisite: '17h30/18h', joursOuverture: [false, true, true, true, true, true, true]},
      { periode: 'Juillet/Août', derniereVisite: '18h30', joursOuverture: [true, true, true, true, true, true, true]},
      { periode: 'Septembre', derniereVisite: '18h', joursOuverture: [false, true, true, true, true, true, true]},
      { periode: 'Octobre', derniereVisite: '17h15', joursOuverture: [false, true, true, true, true, true, true]},
    ];
  }

}
