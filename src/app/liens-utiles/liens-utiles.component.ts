import { LienUtile } from 'app/model/lien-utile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liens-utiles',
  templateUrl: './liens-utiles.component.html',
  styleUrls: ['./liens-utiles.component.css']
})
export class LiensUtilesComponent implements OnInit {
  liensUtiles: LienUtile[];
  constructor() { }

  ngOnInit() {
    this.liensUtiles = [
      { img: 'http://www.lozere-tourisme.com/sites/lozere/themes/lozere2/logo.png',
        titre: 'Comité Départemental du Tourisme', 
        description: 'Pour découvrir la Lozère, découverte des Gorges du Tarn, Gorges de la Jonte, Vallée du Lot, Grands Causses, Cévennes et Mont-Lozère, Aubrac, Margeride', 
        url: 'http://www.lozere-tourisme.com/'
      },
      {img: 'http://www.destinationsuddefrance.com/extension/sdfd/design/sdfd/images/logos/logo_SUDdeFRANCE.png',
       titre: 'Comité Régional de Tourisme Languedoc Roussillon',
       description: 'A la découverte de la région Languedoc Roussillon, la septimanie',
       url: 'http://www.destinationsuddefrance.com/'
      },
      {img: 'http://www.lozere-resa.com/templates/bms/images/logo.png',
       titre: 'Loisirs Accueil Lozère',
       description: 'Préparez votre séjour en Lozère et trouvez l\'hébergement afin de passer un magnifique séjour en Lozère.',
       url: 'http://www.lozere-resa.com/'
      },
      {img: 'http://www.canoelerozier.fr/normal_tarn-le-rozier.gif',
       titre: 'Office de Tourisme du Rozier',
       description: '',
       url: 'http://www.gorgesdutarn-sauveterre.com'
      },
      {img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=320x10000:format=png/path/s0ea240b9b543ee22/image/i3884fb441d2e9687/version/1493205713/image.png',
       titre: 'Office de tourisme de Meyrueis',
       description: 'Office de tourisme Gorges du Tarn, Causses Cévennes',
       url: 'https://www.gorgesdelajonte.com/'
      },
      {img: '',
       titre: '',
       description: '',
       url: ''
      }
    ]
  }

}
