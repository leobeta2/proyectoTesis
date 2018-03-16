import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {DATOS} from "../../data/data.datos"



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
    let altura = parseFloat(this.color);
    let peso = parseFloat(this.peso);
    let sex = this.sex;
    this.cuartoGrafico = false; // medida parche, para que pueda funcionar bien
    //console.log(this.color);
    //console.log(this.peso);
    //console.log(this.date.day);
    //console.log("Este es el sexo");
    //console.log(this.sex);
    //console.log("Day:");
    //console.log(this.dateTime);
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;


    let mesActual = this.dateTime.getMonth()+1;
    const diaActual = this.dateTime.getDate();

    const anoActual = this.dateTime.getFullYear();

    const mesNacimiento = this.date.month || 0;
    const anoNacimiento = this.date.year || 0;
    const diaNacimiento = this.date.day || 0;


    //console.log("Mes Actual");
    //console.log(mesActual);
    //console.log(anoActual);

    //console.log("Mes Nacimiento");
    //console.log(mesNacimiento);
    //console.log(anoNacimiento);
    //console.log(data);
    let difMes=0;
    let difAno=0;
    let difDia=0;

    //calcula el mes segun los dias
    if (diaActual>=21){
      mesActual = mesActual + 1;
    }else if(diaActual >= 11 && diaActual <= 20){
      mesActual = mesActual + 0.5;
    }

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

      //console.log("NADA");
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
    //console.log("Alturas");
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


   //console.log(labels);

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

    });
  }



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
      console.log("oliiiiiiiiiiiiiiiih");
      //funcion para los mensajes de estado nutricional del niño
      let x,result,indice;
      //meses
      let xx = [0.0,0.5,1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0,6.5,7.0,
                   7.5,8.0,8.5,9.0,9.5,10.0,10.5,11.0,11.5,12.0,12.5,13.0,13.5,
                   14.0,14.5,15.0,15.5,16.0,16.5,17.0,17.5,18.0,18.5,19.0,19.5,
                   20.0,20.5,21.0,21.5,22.0,22.5,23.0,23.5,24.0];
      //peso -2D
      let y1 = [2.4,2.8125372,3.2,3.5624628,3.9,4.2126117,4.5,4.7620906,5.,5.2140261
                ,5.4,5.556805,5.7,5.846254,6.,6.1581791,6.3,6.4085295,6.5,6.5952028
                ,6.7,6.8106592,6.9,6.9496602,7.,7.0906999,7.2,7.30004,7.4,7.50914,7.6
                ,7.6508999,7.7,7.7872604,7.9,8.0125583,8.1,8.1500063,8.2,8.2874166,8.4
                ,8.5128272,8.6,8.6487744,8.7,8.7920752,8.9,8.9829248,9.];//

      //-1D
      let y2 = [2.8,3.1641093,3.6,4.0608907,4.5,4.8798278,5.2,5.4697981,5.7,5.9034798,6.1
                ,6.3037827,6.5,6.6688893,6.8,6.8956601,7.,7.1484704,7.3,7.4104582,7.5,7.5971968
                ,7.7,7.8007546,7.9,7.9997849,8.1,8.2001057,8.3,8.3997923,8.5,8.6007253,8.7
                ,8.7973066,8.9,9.0100483,9.1,9.1500002,9.2,9.2899509,9.4,9.5026961,9.6
                ,9.6992647,9.8,9.9002451,10.,10.099755,10.2];

      let ym = [3.2,3.7024407,4.2,4.6725593,5.1,5.4698222,5.8,6.1106521,6.4,6.6625694
                ,6.9,7.1140703,7.3,7.4561493,7.6,7.7488323,7.9,8.0485213,8.2,8.3570823
                ,8.5,8.6106495,8.7,8.7878195,8.9,9.0505723,9.2,9.3098913,9.4,9.4973625
                ,9.6,9.7006587,9.8,9.9000027,10.,10.099331,10.2,10.302675,10.4,10.489969
                ,10.6,10.749947,10.9,11.010242,11.1,11.196586,11.3,11.403414,11.5 ];

      let y3 = [3.7,4.2517677,4.8,5.3232323,5.8,6.2178031,6.6,6.9680552,7.3,7.5724763
                ,7.8,8.0045398,8.2,8.3968644,8.6,8.8080026,9.,9.1586251,9.3,9.4449969
                ,9.6,9.7613874,9.9,9.9969534,10.1,10.250799,10.4,10.49985,10.6,10.7498
                ,10.9,11.000952,11.1,11.246394,11.4,11.513472,11.6,11.687218,11.8,11.950157
                ,12.1,12.212153,12.3,12.388731,12.5,12.645423,12.8,12.929577,13. ];

      let y4 = [4.2,4.8756187,5.5,6.0743813,6.6,7.0768561,7.5,7.8681942,8.2,8.5128673
                ,8.8,9.0553368,9.3,9.5532854,9.8,10.019022,10.2,10.345628,10.5,10.698466
                ,10.9,11.060507,11.2,11.347004,11.5,11.651476,11.8,11.947093,12.1,12.260154
                ,12.4,12.499792,12.6,12.740679,12.9,13.049993,13.2,13.35935,13.5,13.600109
                ,13.7,13.840215,14.,14.151532,14.3,14.453656,14.6,14.721344,14.8];



      if(tipoGrafico == "1A"){
        x = 1;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Peso ingresado por usuario:"+peso);
        console.log("Peso del sistema: "+xx[indice]);
        console.log("Peso con y1 "+y1[indice]);
        console.log("peso con y2 "+y2[indice]);
        console.log("peso con ym "+ym[indice]);
        console.log("peso con y3 "+y3[indice]);
        console.log("peso con y4 "+y4[indice]);

        if (peso < y1[indice]) {
          //debajo la curva -2D
          console.log("Desnutricion severa");

        }else if (peso == y1[indice]){
          //en la curva -2D
          console.log("Riesgo de desnutricion");

        }else if(peso > y1[indice] && peso < y2[indice]){
          //sobre la curva -2D y debajo de la curva -1D
          console.log("Riesgo de Desnutricion(entre -2d y -1d )");
        }else if (peso > y2[indice] && peso < ym[indice]) {
          console.log("Poco riesgo de Desnutricion(entre -1d y M )");
        }else if(peso == ym[indice]){
          console.log("PERFECTO!!");
        }else if(peso > ym[indice] && peso < y3[indice]){
          console.log("Poco reisgo de obesidad(entre M y +1D)");
        }else if(peso == y3[indice]){
          console.log("Poco reisgo de obesidad");
        }else if(peso > y3[indice] && peso < y4[indice]){
          console.log("riesgo de obesidad(+1d a +2d)");
        }else if(peso > y4[indice]){
          console.log("Obesidad!!!")
        }
                //grafica -2D
        // y1 = 0.8501985 + 0.7499007*x + 0.6501985*Math.pow(x,2)+0.5493052*Math.pow(x,3)+0.4525808*Math.pow(x,4)+0.3403718*Math.pow(x,5)
        //     +0.285932*Math.pow(x,6)+0.3159002*Math.pow(x,7)+0.2504672*Math.pow(x,8)+0.1822311*Math.pow(x,9)+0.2206086*Math.pow(x,10)
        //     +0.1353346*Math.pow(x,11)+0.138053*Math.pow(x,12)+0.2124534*Math.pow(x,13)+0.2121334*Math.pow(x,14)+0.1390131*Math.pow(x,15)
        //     +0.1318141*Math.pow(x,16)+0.2337305*Math.pow(x,17)+0.1332639*Math.pow(x,18)+0.1332138*Math.pow(x,19)+0.2338808*Math.pow(x,20)
        //     +0.1312629*Math.pow(x,21)+0.1410678*Math.pow(x,22)+0.2044661*Math.pow(x,23)-0.0589322*Math.pow(x,24);



        // console.log("Resultado: "+y1);
        console.log("Dif MeS: "+difMes);
        // console.log("Peso: "+peso)


      }


      //console.log(tipoGrafico);
      //console.log(difMes);
      //console.log(peso);
      //console.log(altura);
    }



  }
