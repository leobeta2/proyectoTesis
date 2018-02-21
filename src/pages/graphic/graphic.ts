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

    let altura = parseInt(this.color);
    let peso = parseInt(this.peso);
    let sex = this.sex;
    //console.log(this.color);
    //console.log(this.peso);
    //console.log(this.date.day);
    //console.log(this.sex);
    //console.log("Day:");
    //console.log(this.dateTime);

    const mesActual = this.dateTime.getMonth()+1;
    const anoActual = this.dateTime.getFullYear();

    const mesNacimiento = this.date.month || 0;
    const anoNacimiento = this.date.year || 0;

    console.log("Mes Actual");
    console.log(mesActual);
    console.log(anoActual);

    console.log("Mes Nacimiento");
    console.log(mesNacimiento);
    console.log(anoNacimiento);
    //console.log(data);
    let difMes=0;
    let difAno=0;

    if(anoActual == anoNacimiento){
      difMes= mesActual - mesNacimiento;
      console.log("La diferencia mismo año");
      console.log(difMes);
      console.log("1A");
      console.log("2A");

    }else if (anoActual-1 == anoNacimiento) {

      difMes = ( mesActual- mesNacimiento);
      difAno = anoNacimiento - anoActual;
      if(difMes == 0){
        difMes = 12;
      }else if(difMes < 0 ){
        difMes = 12 + difMes;
      }else if(difMes > 0){
        difMes = 12 - difMes;
      }
      console.log("La diferencia de 1 año");
      console.log(difMes);
      console.log("1A");
      console.log("2A");
    } else if (anoActual-2 == anoNacimiento) {
      difMes = mesActual - mesNacimiento;
      if (difMes == 0) {
        difMes = 24;
      } else if (difMes < 0) {
        difMes = 24 + difMes;
      } else if (difMes > 0) {
        difMes = 24 - difMes;
      }

      console.log("NADA");
      console.log("La diferencia de 2 año");
      console.log(difMes);
      console.log("5A");
      console.log("6A");

    }else if (anoActual-3 == anoNacimiento) {
      difMes = mesActual - mesNacimiento;
      if (difMes == 0) {
        difMes = 36;
      } else if (difMes < 0) {
        difMes = 36 + difMes;
      } else if (difMes > 0) {
        difMes = 36 - difMes;
      }
      console.log("La diferencia de 3 año");
      console.log(difMes);
      console.log("5A");
      console.log("6A");

    }else if(anoActual-4 == anoNacimiento) {
      difMes = mesActual - mesNacimiento;
      if (difMes == 0) {
        difMes = 48;
      } else if (difMes < 0) {
        difMes = 48 + difMes;
      } else if (difMes > 0) {
        difMes = 48 - difMes;
      }
      console.log("La diferencia de 4 año");
      console.log(difMes);
      console.log("5A");
      console.log("6A");

    }else if(anoActual-5 == anoNacimiento){
      difMes = mesActual - mesNacimiento;
      if (difMes == 0) {
        difMes = 60;
      } else if (difMes < 0) {
        difMes = 60 + difMes;
      } else if (difMes > 0) {
        difMes = 60 - difMes;
      }
      console.log("La diferencia de 5 año");
      console.log(difMes);
      console.log("5A");
      console.log("6A");

    }else{
        console.log("Se ingresaron mal los datos!!");
    }


    //algoritmo de la altura
    console.log("Alturas");
    if(altura > 50 && altura <= 75){
      console.log("3A");
    }else if (altura > 75 && altura <=100){
      console.log("4A");
    }else if (altura >=85 && altura <=130){
      console.log("7A");
    }else{
      console.log("No hay datos para esa estatura");
    }
    console.log(altura);






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
