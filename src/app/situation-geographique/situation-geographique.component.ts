import { Component, OnInit } from '@angular/core';
import { LiaisonRoutiere } from 'app/model/liaison-routiere';

@Component({
  selector: 'app-situation-geographique',
  templateUrl: './situation-geographique.component.html',
  styleUrls: ['./situation-geographique.component.css']
})
export class SituationGeographiqueComponent implements OnInit {
  liaisonsRoutieres: LiaisonRoutiere[];
  constructor() { }

  ngOnInit() {
    this.liaisonsRoutieres = [
      {destination: 'Paris', axe: 'A75/71', distance: '550', duree: '5h'},
      {destination: 'Clermont-F', axe: 'A75', distance: '150', duree: '1h30'},
      {destination: 'Toulouse', axe: 'RN88', distance: '250', duree: '3h'},
      {destination: 'Montpellier', axe: 'A75', distance: '150', duree: '2h'},
      {destination: 'Marseille', axe: 'RN106', distance: '220', duree: '3h'},
      {destination: 'Lyon', axe: 'RN88', distance: '220', duree: '2H30'}

    ];
  }

}
