import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';
import {DATOS2} from "../../data/data.datos2"
/**
 * Generated class for the Graphic2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-graphic2',
  templateUrl: 'graphic2.html',
})
export class Graphic2Page {

  sex: string;
  date: {day:null, month:null,year:null};
  color: string;
  peso: string;
  t1: string;
  t2:string;
  t3:string;
  t4:string;
  dateTime: any;
  banderasex:boolean;
  edad1: any;
  public cuartoGrafico = true;
  public tercerGrafico = true;
  //public message1: string;
  //public message2: string;
  //public message3: string;

  @ViewChild('graphicsA1') graphicsA1;
  @ViewChild('graphicsA2') graphicsA2;
  @ViewChild('graphicsA3') graphicsA3;
  //@ViewChild('graphicsA4') graphicsA4;


  A1: any;
  A2: any;
  A3: any;
  //A4: any;

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
    //this.cuartoGrafico = false; // medida parche, para que pueda funcionar bien
    //this.message1 = "No hay informacion para mostrar!!";
    //his.message2 = "No hay informacion para mostrar!!";
    //this.message3 = "No hay informacion para mostrar!!";
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    console.log(altura);
    console.log(peso);
    console.log(sex);
    console.log("");


    let mesActual = this.dateTime.getMonth()+1;
    const diaActual = this.dateTime.getDate();

    const anoActual = this.dateTime.getFullYear();

    const mesNacimiento = this.date.month || 0;
    const anoNacimiento = this.date.year || 0;
    const diaNacimiento = this.date.day || 0;


    let DosAnos = false;
    //console.log(anoNacimiento);
    //console.log(data);

    let difAno=0;
    let difDia=0;

    //calcula el mes segun los dias
    if (diaActual>=21){
      mesActual = mesActual + 1;
    }else if(diaActual >= 11 && diaActual <= 20){
      mesActual = mesActual + 0.5;
    }

    let tipoGrafico1 = "";


    // numero de meses entre fecha de nacimiento y fecha actual
    const mesesT = this.dateTime.getMonth() - mesNacimiento + (12 * (this.dateTime.getFullYear() - anoNacimiento))+1;
    console.log("mesesT: "+ mesesT);
    difAno = anoActual - anoNacimiento;

    let index: number[] = [0, 0];
    //funcion para todo lo que es estatura y peso con
    //respecto a la edad
    index= this.GraficoEdad(mesesT, this.sex);
    console.log("Estees:  "+index);

    index1 =index[0];
    index2 =index[1];

    this.edad1 = mesesT;

    index3 = this.GraficoAltura(altura,this.sex);
    console.log('index3: ' +index3);
    this.t1 = DATOS2[index1].tituloGrafico;
    this.t2 = DATOS2[index2].tituloGrafico;
    this.t3 = DATOS2[index3].tituloGrafico;
    console.log('Despues');

    let tipoGraficolocal1 = DATOS2[index1].tipoGrafico || 0;
    let tipoGraficolocal2 = DATOS2[index2].tipoGrafico || 0;
    //let tipoGraficolocal3 = DATOS[index3].tipoGrafico || 0;

    //Definimos el color de los graficos

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
      console.log(this.sex);
      this.banderasex = true;
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
      this.banderasex=false;

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




    console.log('ionViewDidLoad Graphic2Page');
    this.A1 = new Chart(this.graphicsA1.nativeElement, {

        type: 'line',
        data: {
          labels: DATOS2[index1].labels,
          datasets: [
            {
              label: "-2",
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
              data: DATOS2[index1].dato1,
              spanGaps: false,
           }
            ,
            {
              label: "-1.5",
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
              data: DATOS2[index1].dato2,
              spanGaps: false,
            }
            ,

            {
              label: "-1",
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
              data: DATOS2[index1].dato3,
              spanGaps: false,

            },
            {
              label: "-0.5",
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
              data: DATOS2[index1].dato4,
              spanGaps: false,

            },
            {
              label: "M",
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
              data: DATOS2[index1].datoM,
              spanGaps: false,

            }
            ,
            {
              label: "+0.5",
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
              data: DATOS2[index1].dato5,
              spanGaps: false,

            },
            {
              label: "+1",
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
              data: DATOS2[index1].dato6,
              spanGaps: false,

            },
            {
              label: "+1.5",
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
              data: DATOS2[index1].dato7,
              spanGaps: false,

            },
            {
              label: "+1.5",
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
              data: DATOS2[index1].dato8,
              spanGaps: false,

            }


          ]
        }

      });

    this.A2 = new Chart(this.graphicsA2.nativeElement, {

          type: 'line',
          data: {
            labels: DATOS2[index2].labels,
            datasets: [
              {
                label: "-2",
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
                data: DATOS2[index2].dato1,
                spanGaps: false,
             }
              ,
              {
                label: "-1.5",
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
                data: DATOS2[index2].dato2,
                spanGaps: false,
              }
              ,

              {
                label: "-1",
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
                data: DATOS2[index2].dato3,
                spanGaps: false,

              },
              {
                label: "-0.5",
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
                data: DATOS2[index2].dato4,
                spanGaps: false,

              },
              {
                label: "M",
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
                data: DATOS2[index2].datoM,
                spanGaps: false,

              }
              ,
              {
                label: "-0.5",
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
                data: DATOS2[index2].dato5,
                spanGaps: false,

              },
              {
                label: "-1",
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
                data: DATOS2[index2].dato6,
                spanGaps: false,

              },
              {
                label: "-1.5",
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
                data: DATOS2[index2].dato7,
                spanGaps: false,

              },
              {
                label: "-2",
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
                data: DATOS2[index2].dato8,
                spanGaps: false,

              }


            ]
          }

        });

    this.A3 = new Chart(this.graphicsA3.nativeElement, {

              type: 'line',
              data: {
                labels: DATOS2[index3].labels,
                datasets: [
                  {
                    label: "-2",
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
                    data: DATOS2[index3].dato1,
                    spanGaps: false,
                 }
                  ,
                  {
                    label: "-1.5",
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
                    data: DATOS2[index3].dato2,
                    spanGaps: false,
                  }
                  ,

                  {
                    label: "-1",
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
                    data: DATOS2[index3].dato3,
                    spanGaps: false,

                  },
                  {
                    label: "-0.5",
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
                    data: DATOS2[index3].dato4,
                    spanGaps: false,

                  },
                  {
                    label: "M",
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
                    data: DATOS2[index3].datoM,
                    spanGaps: false,

                  }
                  ,
                  {
                    label: "+0.5",
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
                    data: DATOS2[index3].dato5,
                    spanGaps: false,

                  },
                  {
                    label: "+1",
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
                    data: DATOS2[index3].dato6,
                    spanGaps: false,

                  },
                  {
                    label: "+1.5",
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
                    data: DATOS2[index3].dato7,
                    spanGaps: false,

                  },
                  {
                    label: "+2.0",
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
                    data: DATOS2[index3].dato8,
                    spanGaps: false,

                  }


                ]
              }

            });
  }

  public GraficoEdad(mesesT, sex){
    let index:number[] = [-1,-1]
    if( mesesT>=0 && mesesT <= 36){

      if(this.sex == "Masculino"){
        index[0] =0; //para edad x peso
        index[1] =2; //para edad * Estatura

      }else{
        console.log("1A");
        index[0] =1;//para edad x peso
        console.log("2A");
        index[1] =3; //para edad * Estatura
      }




    } else if (mesesT > 36 && mesesT <= 240 ) {


      if(this.sex == "Masculino"){
        index[0] = 8;
        index[1] = 10;
      }else{
        console.log("5A");
        index[0] =9;
        console.log("6A");
        index[1] =11;
      }


    }else{

        console.log("SE SUPERAN LOS 20 AÑOS");
    }

    return(index);

  }

  public GraficoAltura(altura,sex){
    let index3=-1;
    if(altura > 45 && altura <= 103){
      console.log("<= 36meses");
      if(this.sex == "Masculino"){
        index3 = 4;
      }else{
        index3 = 5;
      }

    }else if(altura > 103){
      if(this.sex == "Masculino"){
        index3 = 12;
      }else{
        index3 = 13;
      }
    }

    return(index3);

  }


}
