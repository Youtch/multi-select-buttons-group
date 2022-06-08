import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  aButtonsGroupMock1:Array<any> = [
    {
      id: '1',
      svgUrl: "assets/meteo/001-sun.svg",
      label: "Dégagé",
      checked: false
    },
    {
      id: '2',
      svgUrl: "assets/meteo/002-cloudy.svg",
      label: "Nuages épars",
      checked: false
    },
    {
      id: '3',
      svgUrl: "assets/meteo/003-overcast.svg",
      label: "Nuageux",
      checked: false
    },
    {
      id: '4',
      svgUrl: "assets/meteo/002-cloud.svg",
      label: "Très nuageux",
      checked: false
    },
    {
      id: '11',
      svgUrl: "assets/meteo/030-wind-1.svg",
      label: "Vent faible",
      checked: false
    },
    {
      id: '12',
      svgUrl: "assets/meteo/028-wind.svg",
      label: "Vent fort",
      checked: false
    },
    {
      id: '13',
      svgUrl: "assets/meteo/012-tornado.svg",
      label: "Tempête",
      checked: false
    },
    {
      id: '16',
      svgUrl: "assets/meteo/016-thunder.svg",
      label: "Orageux",
      checked: false
    },
  ]
  aButtonsGroupMock2:Array<any> = [
    {
      id: '5',
      iconName: "coffee",
      label: "Pluie éparse",
      checked: false
    },
    {
      id: '6',
      iconName: "wine",
      label: "Pluie",
      checked: false
    },
    {
      id: '7',
      imageUrl: "assets/meteo/005-downpour.png",
      label: "Forte pluie",
      checked: false
    },
    {
      id: '8',
      imageUrl: "assets/meteo/015-hail.png",
      label: "Grêle",
      checked: false
    },
    {
      id: '9',
      svgUrl: "assets/meteo/006-sleet.svg",
      label: "Bruine",
      checked: false
    },
    {
      id: '10',
      svgUrl: "assets/meteo/027-fog-1.svg",
      label: "Brouillard",
      checked: false
    },
    {
      id: '14',
      svgUrl: "assets/meteo/008-snow.svg",
      label: "Quelques flocons",
      checked: false
    },
    {
      id: '15',
      svgUrl: "assets/meteo/009-snowing.svg",
      label: "Chute de neige",
      checked: false
    },
    {
      id: '17',
      svgUrl: "assets/meteo/011-lightning.svg",
      label: "Orage",
      checked: false
    }
  ]

}
