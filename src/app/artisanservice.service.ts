import { Injectable } from '@angular/core';


export interface Artisan {
  id: number;
  image: string;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanserviceService {
  artisans: Artisan [] = [
    {	id: 1,
      image : "img/1.jpg",
      "name": "Vallis Bellemare",
      "specialty": "Plombier",
      note: 4,
      "location": "Vienne",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"v.bellemare@gmail.com",
      "website":"https://plomberie-bellemare.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      id: 2,
      image : "img/2.jpg",
      "name": "Amitee Lécuyer",
      "specialty": "Couturier",
      note: 4.5,
      "location": "Annecy",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"a.amitee@hotmail.com",
      "website":"https://lecuyer-couture.com",
      "category":"Fabrication",
      "top": false
    },
    {
      id: 3,
      image : "img/3.jpg",
      "name": "Leala Dennis",
      "specialty": "Coiffeur",
      note: 3.8,
      "location": "Chambéry",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"l.dennos@hotmail.fr",
      "website":"https://coiffure-leala-chambery.fr",
      "category":"Services",
      "top": false
    },
    {
      id: 4,
      image : "img/4.jpg",
      "name": "Chocolaterie Labbé",
      "specialty": "Chocolatier",
      note: 4.9,
      "location": "Grenoble",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"chocolaterie-labbe@gmail.com",
      "website":"https://chocolaterie-labbe.fr",
      "category":"Alimentation",
      "top": true
    },
    {
      id: 5,
      image : "img/5.jpg",
      "name": "Claude Quinn",
      "specialty": "Bijoutier",
      note: 4.2,
      "location": "Aix-les-bains",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"claude.quinn@gmail.com",
      "website":"",
      "category":"Fabrication",
      "top": false
    },
    {
      id: 6,
      image : "img/6.png",
      "name": "Valérie Laderoute",
      "specialty": "Toiletteur",
      note: 4.5,
      "location": "Valence",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"v-laredoute@gmail.com",
      "website":"",
      "category":"Services",
      "top": false
    },
    {
      id: 7,
      image : "img/7.jpg",
      "name": "Boutot & fils",
      "specialty": "Menuisier",
      note: 4.7,
      "location": "Bourg-en-bresse",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"boutot-menuiserie@gmail.com",
      "website":"https://boutot-menuiserie.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      id: 8,
      image : "img/8.jpg",
      "name": "CM Graphisme",
      "specialty": "Webdesign",
      note: 4.4,
      "location": "Valence",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@cm-graphisme.com",
      "website":"https://cm-graphisme.com",
      "category":"Services",
      "top": false
    },
    {
      id: 9,
      image : "img/9.jpg",
      "name": "Orville Salmons",
      "specialty": "Chauffagiste",
      note: 5,
      "location": "Evian",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"o-salmons@live.com",
      "website":"",
      "category":"Bâtiment",
      "top": true
    },
    {
      id: 10,
      image : "img/10.jpg",
      "name": "Au pain chaud",
      "specialty": "Boulanger",
      note: 4.8,
      "location": "Montélimar",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"aupainchaud@hotmail.com",
      "website":"",
      "category":"Alimentation",
      "top": true
    },
    {
      id: 11,
      image : "img/11.jpg",
      "name": "Boucherie Dumont",
      "specialty": "Boucher",
      note: 4.5,
      "location": "Lyon",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"boucherie.dumond@gmail.com",
      "website":"",
      "category":"Alimentation",
      "top": false
    },
    {
      id: 12,
      image : "img/12.jpg",
      "name": "Mont Blanc Eléctricité",
      "specialty": "Electricien",
      note: 4.5,
      "location": "Chamonix",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@mont-blanc-electricite.com",
      "website":"https://mont-blanc-electricite.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      id: 13,
      image : "img/13.jpg",
      "name": "Traiteur Truchon",
      "specialty": "Traiteur",
      note: 4.1,
      "location": "Privas",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@truchon-traiteur.fr",
      "website":"https://truchon-traiteur.fr",
      "category":"Bâtiment",
      "top": false
    },
    {
      id: 14,
      image : "img/14.jpg",
      "name": "Le monde des fleurs",
      "specialty": "Fleuriste",
      note: 4.6,
      "location": "Annonay",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@le-monde-des-fleurs-annonay.fr",
      "website":"https://le-monde-des-fleurs-annonay.fr",
      "category":"Services",
      "top": false
    },
    {
      id: 15,
      image : "img/15.jpg",
      "name": "Royden Charbonneau",
      "specialty": "Carrossier",
      note: 3.8,
      "location": "Saint-Priest",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"r.charbonneau@gmail.com",
      "website":"",
      "category":"Services",
      "top": false
    },
    {
      id: 16,
      image : "img/16.png",
      "name": "Ernest Carignan",
      "specialty": "Ferronnier",
      note: 5,
      "location": "Le Puy-en-Velay",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"e-carigan@hotmail.com",
      "website":"",
      "category":"Fabrication",
      "top": false
    },
    {
      id: 17,
      image : "img/17.jpg",
      "name": "C'est sup'hair",
      "specialty": "Coiffeur",
      note: 4.1,
      "location": "Romans-sur-Isère",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"sup-hair@gmail.com",
      "website":"https://sup-hair.fr",
      "category":"Services",
      "top": false
    },
  ]

  constructor() {}
  getArtisans(): Artisan[] {
    return this.artisans;
  }

  getArtisan (id: number): Artisan | undefined {
    const artisan = this.artisans.find((artisan) => artisan.id === id);
    if (!artisan) {
      throw new Error ('Not found');
    }
    return artisan;
  }

}
