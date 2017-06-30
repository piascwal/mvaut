import { Component, OnInit } from '@angular/core';
import { LienUtile } from 'app/model/lien-utile';
@Component({
  selector: 'app-plan-belvedere',
  templateUrl: './plan-belvedere.component.html',
  styleUrls: ['./plan-belvedere.component.css']
})
export class PlanBelvedereComponent implements OnInit {
  liensUtiles: LienUtile[];
  constructor() { }

  ngOnInit() {
    this.liensUtiles = [
      { img: 'src/img/panneau.jpg',
        titre: 'Espace Museographique', 
        description: 'Le vautour et les grands causses - Disparition & Réintroduction - Se nourrir, Se reproduire et Voler', 
        url: ''
      },
      {img: 'src/img/observatoire.jpg',
       titre: 'Terrasse d\'observation',
       description: 'Vue sur les gorges et les falaises - Equipée de longues vues',
       url: ''
      },
      {img: 'src/img/famillevaut.jpg',
       titre: 'Observatoire vidéo',
       description: 'Transmission commentée en direct grâce à des caméras pointées sur les sites de nidification',
       url: ''
      },
      {img: 'src/img/vaut.jpg',
       titre: 'Boutique & Expositions',
       description: 'livres, cartes postales, affiches, photographies, souvenirs...',
       url: ''
      },
      {img: 'src/img/gorges.jpg',
       titre: 'Sorties LPO',
       description: 'Randonnées à thème sur les oiseaux, organisées par la Ligue de Protection des Oiseaux',
       url: ''
      }
    ]
  }

}
