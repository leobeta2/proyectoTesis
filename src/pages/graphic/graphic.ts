import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {DATOS} from "../../data/data.datos"


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
    console.log("Este es el sexo");
    console.log(this.sex);
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

    //console.log("Mes Actual");
    //console.log(mesActual);
    //console.log(anoActual);

    //console.log("Mes Nacimiento");
    //console.log(mesNacimiento);
    //console.log(anoNacimiento);
    //console.log(data);
    let difMes=0;
    let difAno=0;

    let tipoGrafico1 = "";

    if(anoActual == anoNacimiento){
      difMes= mesActual - mesNacimiento;
      console.log("La diferencia mismo año");
      console.log(difMes);
      if(this.sex == "Masculino"){
        index1 =7;
        index2 =8;

      }else{
        console.log("1A");
        index1 =0;
        console.log("2A");
        index2 =1;
      }

      tipoGrafico1 = DATOS[index1].tipoGrafico;


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
      if(this.sex == "Masculino"){
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
      if(this.sex == "Masculino"){
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
      if(this.sex = "Masculino"){
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
      if(this.sex == "Masculino"){
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
      if(this.sex = "Masculino"){
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
      if(this.sex == "Masculino"){
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

        if(this.sex == "Masculino"){
          index3 = 10;
        }else{
          index3= 3;
        }

      }

      if(altura >=85 && altura <= 130){
        console.log("7A");
        this.cuartoGrafico = true;

        if(this.sex=="Masculino"){
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
   let tipoGraficolocal = DATOS[index1].tipoGrafico;

    this.mensajePercentil(tipoGraficolocal,difMes,peso,altura);


   console.log(labels);

    let colorCajame2 = "";
    let colorBordeCajame2="";
    let colorPuntoBordeme2 = "";
    let colorBackme2 = "";
    let pointColorBorderme2 = "";

    let colorCajame1 = "";
    let colorBordeCajame1="";
    let colorPuntoBordeme1 = "";
    let colorBackme1 = "";
    let pointColorBorderme1 = "";

   let colorCaja = "";
   let colorBordeCaja="";
   let colorPuntoBorde = "";
   let colorBack = "";
   let pointColorBorder = "";

    let colorCajama1 = "";
    let colorBordeCajama1="";
    let colorPuntoBordema1 = "";
    let colorBackma1 = "";
    let pointColorBorderma1 = "";

    let colorCajama2 = "";
    let colorBordeCajama2="";
    let colorPuntoBordema2 = "";
    let colorBackma2 = "";
    let pointColorBorderma2 = "";

    if(this.sex == "Femenino"){
      console.log("pinta femenio");
      console.log(this.sex);
      //-2D
      colorCajame2 = "rgba(255, 167, 222,0.4)";
      colorBordeCajame2 = "rgba(255, 167, 222,1)";
      colorPuntoBordeme2 = "rgba(255, 167, 222,1)";
      colorBackme2 = "rgba(255, 167, 222,1)";
      pointColorBorderme2 = "rgba(255, 167, 222,1)";
      //-1D
      colorCajame1 = "rgba(255, 124, 206,0.4)";
      colorBordeCajame1 = "rgba(255, 124, 206,1)";
      colorPuntoBordeme1 = "rgba(255, 124, 206,1)";
      colorBackme1 = "rgba(255, 124, 206,1)";
      pointColorBorderme1 = "rgba(255, 124, 206,1)";
      //Media
      colorCaja = "rgba(255, 51, 178,0.4)";
      colorBordeCaja = "rgba(255, 51, 178,1)";
      colorPuntoBorde = "rgba(255, 124, 206,1)";
      colorBack = "rgba(255, 124, 206,1)";
      pointColorBorder = "rgba(255, 124, 206,1)";
      //+1D
      colorCajama1 = "rgba(255, 167, 222,0.4)";
      colorBordeCajama1 = "rgba(255, 124, 206,1)";
      colorPuntoBordema1 = "rgba(255, 124, 206,1)";
      colorBackma1 = "rgba(255, 124, 206,1)";
      pointColorBorderma1 = "rgba(255, 124, 206,1)";
      //+2D
      colorCajama2 = "rgba(255, 167, 222,0.4)";
      colorBordeCajama2 = "rgba(255, 167, 222,1)";
      colorPuntoBordema2 = "rgba(255, 167, 222,1)";
      colorBackma2 = "rgba(255, 167, 222,1)";
      pointColorBorderma2 = "rgba(255, 167, 222,1)";
    }else if(this.sex== "Masculino"){
      console.log("pinta masculino");
      console.log(this.sex);

      //-2D
      colorCajame2 = "rgba(0, 153, 255,0.4)";
      colorBordeCajame2 = "rgba(0, 153, 255,1)";
      colorPuntoBordeme2 = "rgba(0, 153, 255,1)";
      colorBackme2 = "rgba(0, 153, 255,1)";
      pointColorBorderme2 = "rgba(0, 153, 255,1)";

      //-1D
      colorCajame1 = "rgba(0, 102, 255,0.4)";
      colorBordeCajame1 = "rgba(0, 102, 255,1)";
      colorPuntoBordeme1 = "rgba(0, 102, 255,1)";
      colorBackme1 = "rgba(0, 102, 255,1)";
      pointColorBorderme1 = "rgba(0, 102, 255,1)";

      //medio
      colorCaja = "rgba(0, 0, 153,0.4)";
      colorBordeCaja = "rgba(0, 0, 153)";
      colorPuntoBorde = "rgba(0, 102, 25)";
      colorBack = "rgba(0, 0, 153)";
      pointColorBorder = "rgba(0, 0, 153)";

      //1D
      colorCajama1 = "rgba(0, 102, 255,0.4)";
      colorBordeCajama1 = "rgba(0, 102, 255,1)";
      colorPuntoBordema1 = "rgba(0, 102, 255,1)";
      colorBackma1 = "rgba(0, 102, 255,1)";
      pointColorBorderma1 = "rgba(0, 102, 255,1)";

      //2D
      colorCajama2 = "rgba(0, 153, 255,0.4)";
      colorBordeCajama2 = "rgba(0, 153, 255,1)";
      colorPuntoBordema2 = "rgba(0, 153, 255,1)";
      colorBackma2 = "rgba(0, 153, 255,1)";
      pointColorBorderma2 = "rgba(0, 153, 255,1)";

    }




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
           backgroundColor: colorCajame2, //caja
           borderColor: colorBordeCajame2, //linea
           borderCapStyle: 'butt',
           borderDash: [],
           borderDashOffset: 0.0,
           borderJoinStyle: 'miter',
           pointBorderColor: colorPuntoBordeme2,
           pointBackgroundColor: "#fff",
           pointBorderWidth: 1,
           pointHoverRadius: 6,
           pointHoverBackgroundColor: colorBackme2,
           pointHoverBorderColor: pointColorBorderme2,
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
            backgroundColor: colorCajame1, //caja
            borderColor: colorBordeCajame1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme1,
            pointHoverBorderColor: pointColorBorderme1,
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
            backgroundColor: colorCaja, //caja
            borderColor: colorBordeCaja, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBorde,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBack,
            pointHoverBorderColor: pointColorBorder,
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
            backgroundColor: colorCajama1, //caja
            borderColor: colorBordeCajama1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma1,
            pointHoverBorderColor: pointColorBorderma1,
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
            backgroundColor: colorCajama2, //caja
            borderColor: colorBordeCajama2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma2,
            pointHoverBorderColor: pointColorBorderma2,
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
            backgroundColor: colorCajame2, //caja
            borderColor: colorBordeCajame2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme2,
            pointHoverBorderColor: pointColorBorderme2,
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
            backgroundColor: colorCajame1, //caja
            borderColor: colorBordeCajame1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme1,
            pointHoverBorderColor: pointColorBorderme1,
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
            backgroundColor: colorCaja, //caja
            borderColor: colorBordeCaja, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBorde,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBack,
            pointHoverBorderColor: pointColorBorder,
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
            backgroundColor: colorCajama1, //caja
            borderColor: colorBordeCajama1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma1,
            pointHoverBorderColor: pointColorBorderma1,
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
            backgroundColor: colorCajama2, //caja
            borderColor: colorBordeCajama2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma2,
            pointHoverBorderColor: pointColorBorderma2,
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
            backgroundColor: colorCajame2, //caja
            borderColor: colorBordeCajame2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme2,
            pointHoverBorderColor: pointColorBorderme2,
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
            backgroundColor: colorCajame1, //caja
            borderColor: colorBordeCajame1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme1,
            pointHoverBorderColor: pointColorBorderme1,
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
            backgroundColor: colorCaja, //caja
            borderColor: colorBordeCaja, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBorde,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBack,
            pointHoverBorderColor: pointColorBorder,
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
            backgroundColor: colorCajama1, //caja
            borderColor: colorBordeCajama1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma1,
            pointHoverBorderColor: pointColorBorderma1,
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
            backgroundColor: colorCajama2, //caja
            borderColor: colorBordeCajama2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma2,
            pointHoverBorderColor: pointColorBorderma2,
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
            backgroundColor: colorCajame2, //caja
            borderColor: colorBordeCajame2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme2,
            pointHoverBorderColor: pointColorBorderme2,
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
            backgroundColor: colorCajame1, //caja
            borderColor: colorBordeCajame1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordeme1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackme1,
            pointHoverBorderColor: pointColorBorderme1,
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
            backgroundColor: colorCaja, //caja
            borderColor: colorBordeCaja, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBorde,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBack,
            pointHoverBorderColor: pointColorBorder,
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
            backgroundColor: colorCajama1, //caja
            borderColor: colorBordeCajama1, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma1,
            pointHoverBorderColor: pointColorBorderma1,
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
            backgroundColor: colorCajama2, //caja
            borderColor: colorBordeCajama2, //linea
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorPuntoBordema2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: colorBackma2,
            pointHoverBorderColor: pointColorBorderma2,
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

      //funcion para los mensajes de estado nutricional del niño
      let x,y;
      if(tipoGrafico == "1A"){
        x = 1;
        y = 0.8501985 + 0.7499007*x + 0.6501985*x*x;

      }

      console.log("oliiiiiiiiiiiiiiiih");
      console.log(tipoGrafico);
      console.log(difMes);
      console.log(peso);
      console.log(altura);
    }

  }
