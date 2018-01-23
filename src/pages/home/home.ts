import {Component, ViewChild} from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {GraphicPage} from "../graphic/graphic";
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [
    {id:1, title: "Graficos Niño", description:"Descripcion de nota 1"},
    {id:2, title: "Graficos Niña", description:"Descripcion de nota 2"},
    {id:3, title: "Nota 3", description:"Descripcion de nota 3"}
  ];

  @ViewChild('myNav') nav: NavController
  constructor(private afAuth: AngularFireAuth, private toast:ToastController
              , public navCtrl: NavController) {

  }

  public goToGraphic(){
    this.navCtrl.push(GraphicPage);
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    });
  }

}
