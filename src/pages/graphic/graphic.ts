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
  t1: string;
  t2:string;
  t3:string;
  t4:string;
  dateTime: any;
  public cuartoGrafico = true;
  public tercerGrafico = true;


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
    //this.t = DATOS[0].tituloGrafico;
    this.dateTime = new Date();
  }



  ionViewDidLoad() {
    let opcion = true;
    let altura = parseInt(this.color);
    let peso = parseInt(this.peso);
    let sex = this.sex;
    this.cuartoGrafico = false; // medida parche, para que pueda funcionar bien
    //console.log(this.color);
    //console.log(this.peso);
    //console.log(this.date.day);
    //console.log(this.sex);
    //console.log("Day:");
    //console.log(this.dateTime);
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;


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

    let tipoGrafico1 = "";

    if(anoActual == anoNacimiento){
      difMes= mesActual - mesNacimiento;
      console.log("La diferencia mismo año");
      console.log(difMes);
      if(sex == "Masculino"){
        index1 =7;
        index2 =8;

      }else{
        console.log("1A");
        index1 =0;
        console.log("2A");
        index2 =1;
      }
      
      tipoGrafico1 = DATOS[index1].tipoGrafico;
      this.mensajePercentil(tipoGrafico1,difMes,peso,altura);

    }else if (anoActual-1 == anoNacimiento) {

      difMes = mesActual- mesNacimiento;
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
      if(sex == "Masculino"){
        index1 = 7;
        index2 = 8
      }else{
        console.log("1A");
        index1 =0;
        console.log("2A");
        index2 =1;
      }
      
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
      if(sex = "Masculino"){
        index1 = 11;
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }
      

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
      if(sex = "Masculino"){
        index1 = 11;
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }
      

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
      if(sex = "Masculino"){
        index1 = 11; 
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }
      

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
      if(sex = "Masculino"){
        index1 = 11; 
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }
      

    }else{
        console.log("Se ingresaron mal los datos!!");
    }


    //algoritmo de la altura
    console.log("Alturas");
    if(altura > 50 && altura <= 75){
      console.log("3A");
      if(sex = "Masculino"){
        index3 = 9;
      }else{
        index3 = 2;
      }
      
    }else if (altura > 75 && altura <=130){
      if(altura >100){
        this.tercerGrafico=false;
      }
      if(altura > 75 && altura <=100){
        console.log("4A");
        
        if(sex = "Masculino"){
          index3 = 10;
        }else{
          index3= 3;
        }

      }

      if(altura >=85 && altura <= 130){
        console.log("7A");
        this.cuartoGrafico = true;
        
        if(sex="Masculino"){
          index4 = 12;
        }else{
          index4 = 6;
        }
      }
    }else{
      console.log("No hay datos para esa estatura");
    }
    console.log(altura);



    this.t1 = DATOS[index1].tituloGrafico;
    this.t2 = DATOS[index2].tituloGrafico;
    this.t3 = DATOS[index3].tituloGrafico;
    this.t4 = DATOS[index4].tituloGrafico;

    //let labelGrafico1 = DATOS[index1].labels;
    //let dato1Grafico1 = DATOS[index1].dato1;
    //let dato2Grafico1 = DATOS[index1].dato2;
    //let datoMGrafico1 = DATOS[index1].datoM;
    //let dato3Grafico1 = DATOS[index1].dato3;
    //let dato4Grafico1 = DATOS[index1].dato4;



   const labels = DATOS[0].labels;


   console.log(labels);




    this.A1 = new Chart(this.graphicsA1.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[index1].labels,
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
           data: DATOS[index1].dato1
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
           data: DATOS[index1].dato2
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
            data: DATOS[index1].datoM,
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
            data: DATOS[index1].dato3,
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
            data: DATOS[index1].dato4,
            spanGaps: false,

          }
        ]
      }

    });

    this.A2 = new Chart(this.graphicsA2.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[index2].labels,
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
            data: DATOS[index2].dato2,
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
            data: DATOS[index2].datoM,
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
            data: DATOS[index2].dato3,
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
            data: DATOS[index2].dato4,
            spanGaps: false,

          },
        ]
      }

    });

    if(this.tercerGrafico){
      this.A3 = new Chart(this.graphicsA3.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[index3].labels,
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
            data: DATOS[index3].dato1,
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
            data: DATOS[index3].dato2,
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
            data: DATOS[index3].datoM,
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
            data: DATOS[index3].dato3,
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
            data: DATOS[index3].dato4,
            spanGaps: false,

          },
        ]
      }

    });}



  if (this.cuartoGrafico) {
    this.A4 = new Chart(this.graphicsA4.nativeElement, {

      type: 'line',
      data: {
        labels: DATOS[index4].labels,
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
            data: DATOS[index4].dato1,
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
            data: DATOS[index4].dato2,
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
            data: DATOS[index4].datoM,
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
            data: DATOS[index4].dato3,
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
            data: DATOS[index4].dato4,
            spanGaps: false,

          },
        ]
      }

    });
 }





    }

    public  mensajePercentil(tipoGrafico,difMes, peso,altura){

      console.log("oliiiiiiiiiiiiiiiih");
      console.log(tipoGrafico);
      console.log(difMes);
      console.log(peso);
      console.log(altura);
    }

  }
