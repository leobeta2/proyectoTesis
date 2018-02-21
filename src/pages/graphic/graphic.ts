import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {DATOS} from "../../data/data.datos"
//import { DatosInterface } from '../../interfaces/datos.interface';

/**
 * Generated class for the GraphicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphic',
  templateUrl: 'graphic.html',
})
export class GraphicPage {
  sex: string;
  date: {day:null, month:null,year:null};
  color: string;
  peso: string;
  t: string;
  dateTime: any;

  //Se define niña= A, niño= B
  //grafico 1: Relación Peso por la Edad (P/E). Para niñ@s de 0 – 24 meses.
  //grafico 2: Relación Longitud por la Edad (L/E). Para niña@ de 0 – 24 meses.
  //grafico 3: Relación Peso por la Longitud (P/ L). Para niñ@s que miden entre 50 y 75 cm.
  //grafico 4: Peso por longitud niñ@s de 75 a 100 años


  @ViewChild('graphicsA1') graphicsA1;
  @ViewChild('graphicsA2') graphicsA2;
  @ViewChild('graphicsA3') graphicsA3;
  @ViewChild('graphicsA4') graphicsA4;
  



  A1: any;
  A2: any;
  A3: any;
  A4: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.navParams.get('color');
    this.peso = this.navParams.get('peso');
    this.date = this.navParams.get('date');
    this.sex = this.navParams.get('sex');
    this.t = DATOS[0].tituloGrafico;
    this.dateTime = new Date();
  }

  ionViewDidLoad() {
    console.log(this.color);
    console.log(this.peso);
    console.log(this.date.day);
    console.log(this.sex);
    console.log("Day:");
    console.log(this.dateTime);
    console.log(this.dateTime.getDate());
    console.log(this.dateTime.getMonth());
    console.log(this.dateTime.getFullYear());
    //console.log(data);
    console.log('ionViewDidLoad GraphicPage');

    

   const tipoGrafico1 = DATOS[0].tipoGrafico;
   const tipoGrafico2 = DATOS[1].tipoGrafico;
   const tipoGrafico3 = DATOS[2].tipoGrafico;

   const tutuloGrafico = DATOS[0].tituloGrafico;
   const labels = DATOS[0].labels;
   const dato1 = DATOS[0].dato1;
   const dato2 = DATOS[0].dato2;
   const datoM = DATOS[0].datoM;
   const dato3 = DATOS[0].dato3;
   const dato4 = DATOS[0].dato4;

   console.log(labels);

   


    this.A1 = new Chart(this.graphicsA1.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[0].labels,
        datasets: [
          {
           label: "-2DE",
           fill: false,
           lineTension: 0.1,
           //fillColor: "rgba(220,220,220,0.5)",
           //strokeColor: "rgba(220,220,220,0.8)",
           //highlightFill: "rgba(220,220,220,0.75)",
           //highlightStroke: "rgba(220,220,220,1)",
           //showTooltip: false, //NEW OPTION DON"T NEED TO INCLUDE IT IF YOU WANT TO DISPLAY BUT WON"T HURT IF YOU DO
           backgroundColor: "rgba(255, 167, 222,0.4)", //caja
           borderColor: "rgba(255, 167, 222,1)", //linea
           borderCapStyle: 'butt',
           borderDash: [],
           borderDashOffset: 0.0,
           borderJoinStyle: 'miter',
           pointBorderColor: "rgba(255, 167, 222,1)",
           pointBackgroundColor: "#fff",
           pointBorderWidth: 1,
           pointHoverRadius: 6,
           pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
           pointHoverBorderColor: "rgba(255, 167, 222,1)",
           pointHoverBorderWidth: 2,
           pointRadius: 1,
           pointHitRadius: 10,
           data: DATOS[0].dato1
         }
          ,
          {
           label: "-1DE",
           fill: false,
           lineTension: 0.1,
           //fillColor: "rgba(220,220,220,0.5)",
           //strokeColor: "rgba(220,220,220,0.8)",
           //highlightFill: "rgba(220,220,220,0.75)",
           //highlightStroke: "rgba(220,220,220,1)",
           //showTooltip: false, //NEW OPTION DON"T NEED TO INCLUDE IT IF YOU WANT TO DISPLAY BUT WON"T HURT IF YOU DO
           backgroundColor: "rgba(255, 124, 206,0.4)", //caja
           borderColor: "rgba(255, 124, 206,1)", //linea
           borderCapStyle: 'butt',
           borderDash: [],
           borderDashOffset: 0.0,
           borderJoinStyle: 'miter',
           pointBorderColor: "rgba(255, 124, 206,1)",
           pointBackgroundColor: "#fff",
           pointBorderWidth: 1,
           pointHoverRadius: 6,
           pointHoverBackgroundColor: "rgba(255, 124, 206,1)",
           pointHoverBorderColor: "rgba(255, 124, 206,1)",
           pointHoverBorderWidth: 2,
           pointRadius: 1,
           pointHitRadius: 10,
           data: DATOS[0].dato2
          }
          ,

          {
            label: "Media",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 51, 178,0.4)", //caja
            borderColor: "rgba(255, 51, 178,1)", //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(255, 124, 206,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[0].datoM,
            spanGaps: false,

          },
          {
            label: "+1DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)", //caja
            borderColor: "rgba(255, 124, 206,1)", //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(255, 124, 206,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[0].dato3,
            spanGaps: false,

          },
          {
            label: "+2DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)", //caja
            borderColor: "rgba(255, 167, 222,1)", //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 167, 222,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
            pointHoverBorderColor: "rgba(255, 167, 222,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[0].dato4,
            spanGaps: false,

          }
        ]
      }

    });

    this.A2 = new Chart(this.graphicsA2.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[1].labels,
        datasets: [
          {
            label: "-2DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)",
            borderColor: "rgba(255, 167, 222,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 167, 222,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
            pointHoverBorderColor: "rgba(255, 167, 222,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[1].dato1,
            spanGaps: false,

          },
          {
            label: "-1DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 124, 206,0.4)",
            borderColor: "rgba(255, 124, 206,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 124, 206,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[1].dato2,
            spanGaps: false,

          },
          {
            label: "Media",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 51, 178,0.4)",
            borderColor: "rgba(255, 51, 178,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 51, 178,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 51, 178,1)",
            pointHoverBorderColor: "rgba(255, 51, 178,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[1].datoM,
            spanGaps: false,

          },
          {
            label: "1DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 124, 206,0.4)",
            borderColor: "rgba(255, 124, 206,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 124, 2062,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[1].dato3,
            spanGaps: false,

          },
          {
            label: "2DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)",
            borderColor: "rgba(255, 167, 222,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 167, 222,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
            pointHoverBorderColor: "rgba(255, 167, 222,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[1].dato4,
            spanGaps: false,

          },
        ]
      }

    });

    this.A3 = new Chart(this.graphicsA3.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[2].labels,
        datasets: [
          {
            label: "-2DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)",
            borderColor: "rgba(255, 167, 222,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 167, 222,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
            pointHoverBorderColor: "rgba(255, 167, 222,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[2].dato1,
            spanGaps: false,

          },
          {
            label: "-1DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 124, 206,0.4)",
            borderColor: "rgba(255, 124, 206,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 124, 206,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[2].dato2,
            spanGaps: false,

          },
          {
            label: "Media",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 51, 178,0.4)",
            borderColor: "rgba(255, 51, 178,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 51, 178,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 51, 178,1)",
            pointHoverBorderColor: "rgba(255, 51, 178,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[2].datoM,
            spanGaps: false,

          },
          {
            label: "1DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 124, 206,0.4)",
            borderColor: "rgba(255, 124, 206,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 124, 206,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 124, 2062,1)",
            pointHoverBorderColor: "rgba(255, 124, 206,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[2].dato3,
            spanGaps: false,

          },
          {
            label: "2DE",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 167, 222,0.4)",
            borderColor: "rgba(255, 167, 222,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 167, 222,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 167, 222,1)",
            pointHoverBorderColor: "rgba(255, 167, 222,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: DATOS[2].dato4,
            spanGaps: false,

          },
        ]
      }

    });

    



    console.log(this.A1);



    }
  }
