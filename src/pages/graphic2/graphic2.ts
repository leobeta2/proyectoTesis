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
  public mayor24 = true;
  public tercerGrafico = true;
  public message1: string;
  //public message2: string;
  //public message3: string;

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
    //this.cuartoGrafico = false; // medida parche, para que pueda funcionar bien
    //this.message1 = "No hay informacion para mostrar!!";
    //his.message2 = "No hay informacion para mostrar!!";
    //this.message3 = "No hay informacion para mostrar!!";
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;

    console.log(altura);
    console.log(peso);
    console.log(sex);
    console.log("");
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
    let tipoGrafico2 = "";
    let tipoGrafico3 = "";
    let tipoGrafico4 = "";


    // numero de meses entre fecha de nacimiento y fecha actual
    const mesesT = this.dateTime.getMonth() - mesNacimiento + (12 * (this.dateTime.getFullYear() - anoNacimiento))+1;
    console.log("mesesT: "+ mesesT);
    difAno = anoActual - anoNacimiento;

    let index: number[] = [0, 0,0];
    //funcion para todo lo que es estatura y peso con
    //respecto a la edad
    index= this.GraficoEdad(mesesT, this.sex);
    console.log("Estees:  "+index);

    let mayor24 = true;
    index1 =index[0];
    index2 =index[1];
    index4 = index[2];

    if(index4==-1){
      this.mayor24= false;
      index4 = 12;//por mientras
    }

    console.log("index4: "+index4);
    this.edad1 = mesesT;

    index3 = this.GraficoAltura(altura,this.sex);
    console.log('index3: ' +index3);
    this.t1 = DATOS2[index1].tituloGrafico;
    this.t2 = DATOS2[index2].tituloGrafico;
    this.t3 = DATOS2[index3].tituloGrafico;
    this.t4 = DATOS2[index4].tituloGrafico;
    console.log('Despues');

    let tipoGraficolocal1 = DATOS2[index1].tipoGrafico || 0;
    let tipoGraficolocal2 = DATOS2[index2].tipoGrafico || 0;
    //let tipoGraficolocal3 = DATOS[index3].tipoGrafico || 0;

    //Definimos el color de los graficos
    let puntoIMC = [];

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
    let comienzo= 0;
    let puntoPeso = this.PointPositionPeso(this.peso,mesesT,comienzo);
    let puntoAltura = this.PointPositionAltura(this.color,mesesT, comienzo);
    let puntoLongitudPeso = this.PointPositionPesoLongitud(this.peso,this.color);

    puntoIMC= this.PointIMC(this.peso,this.color,mesesT);

    //mensajes
    tipoGrafico1 = DATOS2[index1].tipoGrafico;
    this.message1=this.MensajePercentil(tipoGrafico1,peso,mesesT,altura);

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
            ,
            {
              label: "Coordenadas",
              backgroundColor: "#ff0000",
              borderColor: "#ff0000",
              data: puntoPeso,
              fill: false,
              pointRadius: 5,
              pointHoverRadius: 10,
              showLine: false // no line shown

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

              },
              {
                label: "Coordenada",
                backgroundColor: "#ff0000",
                borderColor: "#ff0000",
                data: puntoAltura,
                fill: false,
                pointRadius: 5,
                pointHoverRadius: 10,
                showLine: false // no line shown

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

                  },
                  {
                    label: "Coordenada",
                    backgroundColor: "#ff0000",
                    borderColor: "#ff0000",
                    data: puntoLongitudPeso,
                    fill: false,
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    showLine: false // no line shown

                  }


                ]
              }

            });

    this.A4 = new Chart(this.graphicsA4.nativeElement, {


                    type: 'line',
                    data: {
                      labels: DATOS2[index4].labels,
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
                          data: DATOS2[index4].dato1,
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
                          data: DATOS2[index4].dato2,
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
                          data: DATOS2[index4].dato3,
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
                          data: DATOS2[index4].dato4,
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
                          data: DATOS2[index4].datoM,
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
                          data: DATOS2[index4].dato5,
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
                          data: DATOS2[index4].dato6,
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
                          data: DATOS2[index4].dato7,
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
                          data: DATOS2[index4].dato8,
                          spanGaps: false,

                        },
                        {
                          label: "Coordenada",
                          backgroundColor: "#ff0000",
                          borderColor: "#ff0000",
                          data: puntoIMC,
                          fill: false,
                          pointRadius: 5,
                          pointHoverRadius: 10,
                          showLine: false // no line shown

                        }


                      ]
                    }

                  });





  }

  public GraficoEdad(mesesT, sex){
    let index:number[] = [-1,-1,-1]

    if(mesesT>24 && mesesT>0){

      if(this.sex == "Masculino"){

        index[2]=12 // imc


      }else{

        index[2] =13; //imc

      }
    }//fin mayor a 24 meses


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
    }else if (mesesT > 36 && mesesT <= 240 ) {


      if(this.sex == "Masculino"){
        index[0] = 8;
        index[1] = 10;

      }else{
        console.log("5A");
        index[0] =9;
        console.log("6A");
        index[1] =11;

      }


    }else if(mesesT>240){

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

    }else if(altura > 103){ //?????
      this.tercerGrafico = false;
      if(this.sex == "Masculino"){
        index3 = 12;
      }else{
        index3 = 13;
      }
    }

    return(index3);

  }


  public PointPositionPeso(peso,Meses,bandStart){

    let a = [];

    for (let i=0; i < Meses;i++){
      a.push(null);
      a.push(null);

    }
    a.push(peso);
    console.log("Peso"+ a);

    return(a);
  }

  public PointPositionAltura(Altura,Meses,DosAnos){
    console.log("ENtre??!?!?!?");
    let a = [];

    for (let i=0; i < Meses;i++){
      a.push(null);
      a.push(null);

    }
    a.push(Altura);
    console.log("Altura"+ a);

    return(a);
  }


  public PointPositionPesoLongitud(Peso,longitud){
    let a = [];
    let imc = 0;
    console.log("Point Position Longitud!!!!");
    console.log("LONGItUD Antes 1: "+longitud);

    if (longitud >= 45 && longitud <= 103) {
      longitud = longitud -45;
      console.log("LONGIUD despues 1: "+longitud);
      for (let i=0; i < longitud;i++){
        //console.log(i);
        a.push(null);
        a.push(null);
      }
      a.push(Peso);
    return(a);


    }
  }

  public PointIMC(peso,longitud,meses){
    console.log("IMC");
    let a = [];
    let imc;
    let imcR;

    imc = peso/Math.pow((longitud)/100,2);
    imcR = Math.round(imc * 100) / 100
    console.log("IMC: "+imc);
    console.log("IMC R:"+imcR);
    for (let i=0; i < meses;i++){
      //console.log(i);
      a.push(null);
      a.push(null);
    }
    a.push(imcR);
    return(a);
  }

  public MensajePercentil(tipoGrafico,peso,mesesT,altura){
    let auxMessage="";
    let xx,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice;

    if(tipoGrafico == "PE36_M"){
      console.log("Para gragico PE36_M");
      xx = DATOS2[0].labels;
      y1 = DATOS2[0].dato1;
      y2 = DATOS2[0].dato2;
      y3 = DATOS2[0].dato3;
      y4 = DATOS2[0].dato4;
      ym = DATOS2[0].datoM;
      y5 = DATOS2[0].dato5;
      y6 = DATOS2[0].dato6;
      y7 = DATOS2[0].dato7;
      y8 = DATOS2[0].dato8;

      for(let i =0; i < xx.length; i++){
        if(mesesT == xx[i]){
          indice = i;
        }
      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    return(auxMessage);
  }

  public calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice){
    let aux="";

    if (peso <= y1[indice]) {
      //debajo la curva -2D
      console.log("Desnutricion severa");
      aux = "Desnutrición (-2)";


    }else if(peso > y1[indice] && peso <= y2[indice]){
      //sobre la curva -2D y debajo de la curva -1D

      aux = "Riesgo de Desnutricion(Entre -2 y -1.5 )"
    }else if (peso > y2[indice] && peso <= y3[indice]) {

      aux = "NORMAL - Eutrofico (Entre -1.5 y -1.0)";
    }else if(peso > y3[indice] && peso <= y4[indice]){

      aux = "NORMAL - Eutrofico (Entre -1.0 y -0.5)";
    }else if(peso > y4[indice] && peso <= ym[indice]){

      aux = "NORMAL - Eutrofico (Entre -0.5 y 0)";
    }else if(peso > ym[indice] && peso <= y5[indice]){

      aux = "Riesgo de obesidad (Entre 0 y 0.5)";
    }else if(peso > y5[indice] && peso <= y6[indice]){

      aux = "Riesgo de obesidad (Entre 0.5 y 1.0)";
    }else if(peso > y6[indice] && peso <= y7[indice]){

      aux = "Obesidad (Entre 1.0 y 1.5)";
    }else if(peso > y7[indice] && peso <= y8[indice]){

      aux = "Obesidad (Entre 1.5 y 2.0)";
    }else if(peso > y8[indice]){

      aux = "Obesidad (+2.0)";
    }
    return (aux);

  }


}
