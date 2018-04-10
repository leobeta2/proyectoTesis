import {Component, ViewChild} from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {GraphicPage} from "../graphic/graphic";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // notes = [
  //   {id:1, title: "Graficos Niño", description:"Descripcion de nota 1"},
  //   {id:2, title: "Graficos Niña", description:"Descripcion de nota 2"},
  //   {id:3, title: "Nota 3", description:"Descripcion de nota 3"}
  // ];

  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  public goToGraphic(sex,date,color, peso){
    let band1 = true;
    /*let data= {
      title: 'holi',
      second: 'no molestes'
    };
    this.navCtrl.push(GraphicPage, data);*/

    if(sex=="" || date=="" || color =="" || peso ==""){
      this.showAlert();
      band1 = false;
    }
    if(color<=50 || color>130){
      //altura
      this.showAlert2();
      band1 = false;
    }
    if(peso<1 && peso > 100){
      this.showAlert3();
      band1 = false;
    }
    console.log(date);



    if(band1){
      this.navCtrl.push(GraphicPage, {sex,date,color,peso});

    }




  }

  showAlert(){
    let alert = this.alertCtrl.create({
    title:"No dejar campos en blanco",
    subTitle:"Intente Nuevamente",
    buttons:['Aceptar']
    });
    alert.present();
  }
  showAlert2(){
    let alert = this.alertCtrl.create({
    title:"ALtura entre 50 y 130 [cms]",
    subTitle:"Intente Nuevamente",
    buttons:['Aceptar']
    });
    alert.present();
  }
  showAlert3(){
    let alert = this.alertCtrl.create({
    title:"Excede peso maximo o minimo",
    subTitle:"Intente Nuevamente",
    buttons:['Aceptar']
    });
    alert.present();
  }

}
