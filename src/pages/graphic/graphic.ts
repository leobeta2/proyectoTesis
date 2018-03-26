import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {DATOS} from "../../data/data.datos"
import {SPLINE} from "../../data/data.spline"



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

  let tipoGraficolocal3;
  let tipoGraficolocal4;

   const labels = DATOS[0].labels;
   let tipoGraficolocal1 = DATOS[index1].tipoGrafico || 0;
   let tipoGraficolocal2 = DATOS[index2].tipoGrafico || 0;
   if(index3!=0){
      tipoGraficolocal3 = DATOS[index3].tipoGrafico || 0;
   }

   if (index4 != 0){
    tipoGraficolocal4 = DATOS[index4].tipoGrafico || 0;
 }


    this.mensajePercentil(tipoGraficolocal1,difMes,difAno,peso,altura);
    this.mensajePercentil(tipoGraficolocal2,difMes,difAno,peso,altura);
    this.mensajePercentil(tipoGraficolocal3,difMes,difAno,peso,altura);
    this.mensajePercentil(tipoGraficolocal4,difMes,difAno,peso,altura);



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

    public  mensajePercentil(tipoGrafico,difMes,difAno, peso,altura){
      console.log("oliiiiiiiiiiiiiiiih");
      //funcion para los mensajes de estado nutricional del niño
      let xx,y1,y2,ym,y3,y4,result,indice,alt;//y1: -2D
      //meses

      console.log("mensajePercentil - "+tipoGrafico);

      if(tipoGrafico == "1A"){
        xx = SPLINE[0].x;
        y1 = SPLINE[0].menos2D;
        y2 = SPLINE[0].menos1D;
        ym = SPLINE[0].media;
        y3 = SPLINE[0].mas1D;
        y4 = SPLINE[0].mas2D;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            //console.log(indice);
        }
        // console.log("Peso ingresado por usuario:"+peso);
        // console.log("Peso del sistema: "+xx[indice]);
        // console.log("Peso con y1 "+y1[indice]);
        // console.log("peso con y2 "+y2[indice]);
        // console.log("peso con ym "+ym[indice]);
        // console.log("peso con y3 "+y3[indice]);
        // console.log("peso con y4 "+y4[indice]);
        console.log("Para grafico 1A");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);




        // console.log("Resultado: "+y1);
        console.log("Dif MeS: "+difMes);
        // console.log("Peso: "+peso)


      }
      if(tipoGrafico == '2A'){
        xx = SPLINE[1].x;
        y1 = SPLINE[1].menos2D;
        y2 = SPLINE[1].menos1D;
        ym = SPLINE[1].media;
        y3 = SPLINE[1].mas1D;
        y4 = SPLINE[1].mas2D;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 2A");
        this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);

      }
      if(tipoGrafico == '3A'){
        xx = SPLINE[2].x;
        y1 = SPLINE[2].menos2D;
        y2 = SPLINE[2].menos1D;
        ym = SPLINE[2].media;
        y3 = SPLINE[2].mas1D;
        y4 = SPLINE[2].mas2D;

        alt = Math.round(altura);// por mientras

        for (let i = 0; i < xx.length; i++) {
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 3A");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '4A'){
        xx = SPLINE[3].x;
        y1 = SPLINE[3].menos2D;
        y2 = SPLINE[3].menos1D;
        ym = SPLINE[3].media;
        y3 = SPLINE[3].mas1D;
        y4 = SPLINE[3].mas2D;

        alt = Math.round(altura);// por mientras

        for (let i = 0; i < xx.length; i++) {
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 4A");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '5A'){
        xx = SPLINE[4].x;
        y1 = SPLINE[4].menos2D;
        y2 = SPLINE[4].menos1D;
        ym = SPLINE[4].media;
        y3 = SPLINE[4].mas1D;
        y4 = SPLINE[4].mas2D;



        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 5A");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '6A'){
        xx = SPLINE[5].x;
        y1 = SPLINE[5].menos2D;
        y2 = SPLINE[5].menos1D;
        ym = SPLINE[5].media;
        y3 = SPLINE[5].mas1D;
        y4 = SPLINE[5].mas2D;



        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 6A");
        this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '7A'){
        xx = SPLINE[6].x;
        y1 = SPLINE[6].menos2D;
        y2 = SPLINE[6].menos1D;
        ym = SPLINE[6].media;
        y3 = SPLINE[6].mas1D;
        y4 = SPLINE[6].mas2D;

        alt = Math.round(altura);// por mientras

        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 7A");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '1B'){
        xx = SPLINE[7].x;
        y1 = SPLINE[7].menos2D;
        y2 = SPLINE[7].menos1D;
        ym = SPLINE[7].media;
        y3 = SPLINE[7].mas1D;
        y4 = SPLINE[7].mas2D;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 1B");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);

      }
      if(tipoGrafico == '2B'){
        xx = SPLINE[8].x;
        y1 = SPLINE[8].menos2D;
        y2 = SPLINE[8].menos1D;
        ym = SPLINE[8].media;
        y3 = SPLINE[8].mas1D;
        y4 = SPLINE[8].mas2D;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 2B");
        this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);

      }
      if(tipoGrafico == '3B'){
        xx = SPLINE[9].x;
        y1 = SPLINE[9].menos2D;
        y2 = SPLINE[9].menos1D;
        ym = SPLINE[9].media;
        y3 = SPLINE[9].mas1D;
        y4 = SPLINE[9].mas2D;

        for (let i = 0; i < xx.length; i++) {
            if (difMes == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 3B");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '4B'){
        xx = SPLINE[10].x;
        y1 = SPLINE[10].menos2D;
        y2 = SPLINE[10].menos1D;
        ym = SPLINE[10].media;
        y3 = SPLINE[10].mas1D;
        y4 = SPLINE[10].mas2D;

        alt = Math.round(altura);// por mientras

        for (let i = 0; i < xx.length; i++) {
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 4B");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '5B'){
        xx = SPLINE[11].x;
        y1 = SPLINE[11].menos2D;
        y2 = SPLINE[11].menos1D;
        ym = SPLINE[11].media;
        y3 = SPLINE[11].mas1D;
        y4 = SPLINE[11].mas2D;



        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 5B");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '6B'){
        xx = SPLINE[12].x;
        y1 = SPLINE[12].menos2D;
        y2 = SPLINE[12].menos1D;
        ym = SPLINE[12].media;
        y3 = SPLINE[12].mas1D;
        y4 = SPLINE[12].mas2D;



        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 6B");
        this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '7B'){
        xx = SPLINE[13].x;
        y1 = SPLINE[13].menos2D;
        y2 = SPLINE[13].menos1D;
        ym = SPLINE[13].media;
        y3 = SPLINE[13].mas1D;
        y4 = SPLINE[13].mas2D;

        alt = Math.round(altura);// por mientras

        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 7B");
        this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }




      //console.log(tipoGrafico);
      //console.log(difMes);
      //console.log(peso);
      //console.log(altura);
    }//fin funcion mensajePercentil

    public calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice){
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
        console.log("Poco riesgo de obesidad");
      }else if(peso > y3[indice] && peso < y4[indice]){
        console.log("riesgo de obesidad(+1d a +2d)");
      }else if(peso > y4[indice]){
        console.log("Obesidad!!!")
      }

    }

    public calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice){
      if (altura < y1[indice]) {
        //debajo la curva -2D
        console.log("Desnutricion severa");

      }else if (altura == y1[indice]){
        //en la curva -2D
        console.log("Riesgo de desnutricion");

      }else if(altura > y1[indice] && altura < y2[indice]){
        //sobre la curva -2D y debajo de la curva -1D
        console.log("Riesgo de Desnutricion(entre -2d y -1d )");
      }else if (altura > y2[indice] && altura < ym[indice]) {
        console.log("Poco riesgo de Desnutricion(entre -1d y M )");
      }else if(altura == ym[indice]){
        console.log("PERFECTO!!");
      }else if(altura > ym[indice] && altura < y3[indice]){
        console.log("Poco reisgo de obesidad(entre M y +1D)");
      }else if(altura == y3[indice]){
        console.log("Poco riesgo de obesidad");
      }else if(altura > y3[indice] && altura < y4[indice]){
        console.log("riesgo de obesidad(+1d a +2d)");
      }else if(altura > y4[indice]){
        console.log("Obesidad!!!")
      }
    }




  }
