import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {GraphicPage} from "../graphic/graphic";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [
    {id:1, title: "Nota 1", description:"Descripcion de nota 1"},
    {id:2, title: "Nota 2", description:"Descripcion de nota 2"},
    {id:3, title: "Nota 3", description:"Descripcion de nota 3"}
  ];

  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController) {

  }

  public goToGraphic(){
    this.navCtrl.push(GraphicPage);
  }

}
