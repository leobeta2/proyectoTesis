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
  public primerGrafico = true;
  public tercerGrafico = true;
  public message1: string;
  public message2: string;
  public message3: string;
  public message4: string;//imc
  public message5: string;//mensaje imc
  public message6: string;

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
    if(mesesT >36){
      comienzo=24;
    }

    let puntoPeso = this.PointPositionPeso(this.peso,mesesT,comienzo);
    let puntoAltura = this.PointPositionAltura(this.color,mesesT, comienzo);
    let puntoLongitudPeso = this.PointPositionPesoLongitud(this.peso,this.color);

    puntoIMC= this.PointIMC(this.peso,this.color,mesesT,comienzo);

    //mensajes
    tipoGrafico1 = DATOS2[index1].tipoGrafico;
    tipoGrafico2 = DATOS2[index2].tipoGrafico;
    tipoGrafico3 = DATOS2[index3].tipoGrafico;
    tipoGrafico4 = DATOS2[index4].tipoGrafico;

    this.message1=this.MensajePercentil(tipoGrafico1,peso,mesesT,altura);
    this.message2=this.MensajePercentil(tipoGrafico2,peso,mesesT,altura);
    this.message3=this.MensajePercentil(tipoGrafico3,peso,mesesT,altura);
    this.message6 = this.MensajePercentil(tipoGrafico4,peso,mesesT,altura);

    console.log('ionViewDidLoad Graphic2Page');
    this.A1 = new Chart(this.graphicsA1.nativeElement, {

        type: 'line',
        data: {
          labels: DATOS2[index1].labels,
          datasets: [
            {
              label: "p3",
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
              label: "p5",
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
              label: "p10",
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
              label: "p25",
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
              label: "p50",
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
              label: "p75",
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
              label: "p90",
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
              label: "p95",
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
              label: "p97",
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
                label: "p3",
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
                label: "p5",
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
                label: "p10",
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
                label: "p25",
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
                label: "p50",
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
                label: "p75",
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
                label: "p90",
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
                label: "p95",
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
                label: "p97",
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
                    label: "p3",
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
                    label: "p5",
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
                    label: "p10",
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
                    label: "p25",
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
                    label: "p50",
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
                    label: "p75",
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
                    label: "p90",
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
                    label: "p95",
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
                    label: "p97",
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
                          label: "p3",
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
                          label: "p5",
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
                          label: "p10",
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
                          label: "p25",
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
                          label: "p50",
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
                          label: "p75",
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
                          label: "p90",
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
                          label: "p95",
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
                          label: "p97",
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
      this.tercerGrafico = false
      this.primerGrafico = false
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
    let MesesTemp=0;
    MesesTemp = Meses-bandStart;

    for (let i=0; i < MesesTemp;i++){
      a.push(null);
      a.push(null);

    }
    a.push(peso);
    console.log("Peso"+ a);

    return(a);
  }

  public PointPositionAltura(Altura,Meses,bandStart){
    console.log("ENtre??!?!?!?");
    let a = [];
    let MesesTemp=0;
    MesesTemp = Meses-bandStart;

    for (let i=0; i < MesesTemp;i++){
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

  public PointIMC(peso,longitud,meses,bandStart){
    console.log("IMC");
    let a = [];
    let imc;
    let imcR;
    let MesesTemp=0;
    console.log("PointIMC");
    console.log(meses);
    console.log(bandStart);
    MesesTemp = meses-bandStart;

    imc = peso/Math.pow((longitud)/100,2);
    imcR = Math.round(imc * 100) / 100
    console.log("IMC: "+imc);
    console.log("IMC R:"+imcR);
    this.message4 = imcR;

    for (let i=0; i < MesesTemp;i++){
      //console.log(i);
      a.push(null);
    }
    a.push(imcR);

    //MENSAJE SEGÚN IMC

    if(imcR < 16){
      this.message5 = "Infrapeso: Delgadez Severa"
    }else if(imcR >=16 && imcR <=16.99){
      this.message5 = "Infrapeso: Delgadez moderada"
    }else if(imcR >=17 && imcR <=18.49){
      this.message5 = "Infrapeso: Delgadez aceptable"
    }else if(imcR >=18.50 && imcR <=24.99){
      this.message5 = "Peso Normal"
    }else if(imcR >=25 && imcR <=29.99){
      this.message5 = "Sobrepeso"
    }else if(imcR >=30 && imcR <=34.99){
      this.message5 = "Obeso: Tipo I"
    }else if(imcR >=35 && imcR <40){
      this.message5 = "Obeso: Tipo II"
    }else if(imcR >40){
      this.message5 = "Obeso: Tipo III"
    }




    return(a);
  }

  public MensajePercentil(tipoGrafico,peso,mesesT,altura){
    let auxMessage="";
    let xx,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice,alt;

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
    if(tipoGrafico == "PE36_F"){
      console.log("Para gragico PE36_F");
      xx = DATOS2[1].labels;
      y1 = DATOS2[1].dato1;
      y2 = DATOS2[1].dato2;
      y3 = DATOS2[1].dato3;
      y4 = DATOS2[1].dato4;
      ym = DATOS2[1].datoM;
      y5 = DATOS2[1].dato5;
      y6 = DATOS2[1].dato6;
      y7 = DATOS2[1].dato7;
      y8 = DATOS2[1].dato8;

      for(let i =0; i < xx.length; i++){
        if(mesesT == xx[i]){
          indice = i;
        }
      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "ESE36_M"){
      console.log("Para gragico ESE36_M");
      xx = DATOS2[2].labels;
      y1 = DATOS2[2].dato1;
      y2 = DATOS2[2].dato2;
      y3 = DATOS2[2].dato3;
      y4 = DATOS2[2].dato4;
      ym = DATOS2[2].datoM;
      y5 = DATOS2[2].dato5;
      y6 = DATOS2[2].dato6;
      y7 = DATOS2[2].dato7;
      y8 = DATOS2[2].dato8;

      for(let i =0; i < xx.length; i++){
        if(mesesT == xx[i]){
          indice = i;
        }
      }
      console.log("indice:"+indice);
      auxMessage = this.calculosAltura(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "ESE36_F"){
      console.log("Para gragico ESE36_F");
      xx = DATOS2[3].labels;
      y1 = DATOS2[3].dato1;
      y2 = DATOS2[3].dato2;
      y3 = DATOS2[3].dato3;
      y4 = DATOS2[3].dato4;
      ym = DATOS2[3].datoM;
      y5 = DATOS2[3].dato5;
      y6 = DATOS2[3].dato6;
      y7 = DATOS2[3].dato7;
      y8 = DATOS2[3].dato8;

      console.log(  y1 = DATOS2[3].dato1  );

      for(let i =0; i < xx.length; i++){
        if(mesesT == xx[i]){
          indice = i;
        }
      }
      console.log("indice:"+indice);
      auxMessage = this.calculosAltura(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PES36_M"){
      console.log("Para grafico PES36_M");
      xx = DATOS2[4].labels;
      y1 = DATOS2[4].dato1;
      y2 = DATOS2[4].dato2;
      y3 = DATOS2[4].dato3;
      y4 = DATOS2[4].dato4;
      ym = DATOS2[4].datoM;
      y5 = DATOS2[4].dato5;
      y6 = DATOS2[4].dato6;
      y7 = DATOS2[4].dato7;
      y8 = DATOS2[4].dato8;


      alt = Math.round(altura/0.5)*0.5;// redondea de 0.5 a 0.5
      alt = alt.toString();
      alt = alt.replace(".",",");
      console.log("Sin redondear:"+altura);
      console.log("COn redondear"+alt);

      for(let i =0; i < xx.length; i++){

        if(alt == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PES36_F"){
      console.log("Para grafico PES36_F");
      xx = DATOS2[5].labels;
      y1 = DATOS2[5].dato1;
      y2 = DATOS2[5].dato2;
      y3 = DATOS2[5].dato3;
      y4 = DATOS2[5].dato4;
      ym = DATOS2[5].datoM;
      y5 = DATOS2[5].dato5;
      y6 = DATOS2[5].dato6;
      y7 = DATOS2[5].dato7;
      y8 = DATOS2[5].dato8;


      alt = Math.round(altura/0.5)*0.5;// redondea de 0.5 a 0.5
      alt = alt.toString();
      alt = alt.replace(".",",");
      console.log("Sin redondear:"+altura);
      console.log("COn redondear"+alt);

      for(let i =0; i < xx.length; i++){

        if(alt == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PES_M"){
      console.log("Para grafico PES_M");
      xx = DATOS2[6].labels;
      y1 = DATOS2[6].dato1;
      y2 = DATOS2[6].dato2;
      y3 = DATOS2[6].dato3;
      y4 = DATOS2[6].dato4;
      ym = DATOS2[6].datoM;
      y5 = DATOS2[6].dato5;
      y6 = DATOS2[6].dato6;
      y7 = DATOS2[6].dato7;
      y8 = DATOS2[6].dato8;


      alt = Math.round(altura/0.5)*0.5;// redondea de 0.5 a 0.5
      alt = alt.toString();
      alt = alt.replace(".",",");
      console.log("Sin redondear:"+altura);
      console.log("COn redondear"+alt);

      for(let i =0; i < xx.length; i++){

        if(alt == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PES_F"){
      console.log("Para grafico PES_F");
      xx = DATOS2[7].labels;
      y1 = DATOS2[7].dato1;
      y2 = DATOS2[7].dato2;
      y3 = DATOS2[7].dato3;
      y4 = DATOS2[7].dato4;
      ym = DATOS2[7].datoM;
      y5 = DATOS2[7].dato5;
      y6 = DATOS2[7].dato6;
      y7 = DATOS2[7].dato7;
      y8 = DATOS2[7].dato8;


      alt = Math.round(altura/0.5)*0.5;// redondea de 0.5 a 0.5
      alt = alt.toString();
      alt = alt.replace(".",",");
      console.log("Sin redondear:"+altura);
      console.log("COn redondear"+alt);

      for(let i =0; i < xx.length; i++){

        if(alt == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PE_M"){
      console.log("Para grafico PE_M");
      xx = DATOS2[8].labels;
      y1 = DATOS2[8].dato1;
      y2 = DATOS2[8].dato2;
      y3 = DATOS2[8].dato3;
      y4 = DATOS2[8].dato4;
      ym = DATOS2[8].datoM;
      y5 = DATOS2[8].dato5;
      y6 = DATOS2[8].dato6;
      y7 = DATOS2[8].dato7;
      y8 = DATOS2[8].dato8;



      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "PE_F"){
      console.log("Para grafico PE_F");
      xx = DATOS2[9].labels;
      y1 = DATOS2[9].dato1;
      y2 = DATOS2[9].dato2;
      y3 = DATOS2[9].dato3;
      y4 = DATOS2[9].dato4;
      ym = DATOS2[9].datoM;
      y5 = DATOS2[9].dato5;
      y6 = DATOS2[9].dato6;
      y7 = DATOS2[9].dato7;
      y8 = DATOS2[9].dato8;



      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "ESE_M"){
      console.log("Para grafico ESE_M");
      xx = DATOS2[10].labels;
      y1 = DATOS2[10].dato1;
      y2 = DATOS2[10].dato2;
      y3 = DATOS2[10].dato3;
      y4 = DATOS2[10].dato4;
      ym = DATOS2[10].datoM;
      y5 = DATOS2[10].dato5;
      y6 = DATOS2[10].dato6;
      y7 = DATOS2[10].dato7;
      y8 = DATOS2[10].dato8;



      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosAltura(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "ESE_F"){
      console.log("Para grafico ESE_F");
      xx = DATOS2[11].labels;
      y1 = DATOS2[11].dato1;
      y2 = DATOS2[11].dato2;
      y3 = DATOS2[11].dato3;
      y4 = DATOS2[11].dato4;
      ym = DATOS2[11].datoM;
      y5 = DATOS2[11].dato5;
      y6 = DATOS2[11].dato6;
      y7 = DATOS2[11].dato7;
      y8 = DATOS2[11].dato8;



      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      console.log("indice:"+indice);
      auxMessage = this.calculosAltura(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }

    if(tipoGrafico == "IMC_M"){
      console.log("IMC MAsculino")
      xx = DATOS2[12].labels;
      y1 = DATOS2[12].dato1;
      y2 = DATOS2[12].dato2;
      y3 = DATOS2[12].dato3;
      y4 = DATOS2[12].dato4;
      ym = DATOS2[12].datoM;
      y5 = DATOS2[12].dato5;
      y6 = DATOS2[12].dato6;
      y7 = DATOS2[12].dato7;
      y8 = DATOS2[12].dato8;

      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      auxMessage = this.calculosIMC(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);
    }
    if(tipoGrafico == "IMC_F"){
      console.log("IMC femenino")
      xx = DATOS2[13].labels;
      y1 = DATOS2[13].dato1;
      y2 = DATOS2[13].dato2;
      y3 = DATOS2[13].dato3;
      y4 = DATOS2[13].dato4;
      ym = DATOS2[13].datoM;
      y5 = DATOS2[13].dato5;
      y6 = DATOS2[13].dato6;
      y7 = DATOS2[13].dato7;
      y8 = DATOS2[13].dato8;

      for(let i =0; i < xx.length; i++){

        if(mesesT == xx[i]){
          indice = i;
        }

      }
      console.log("INdice IMC:"+indice)
      auxMessage = this.calculosIMC(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice);

    }



    return(auxMessage);
  }

  public calculosIMC(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice){
    let aux="";
    let auxIMC = peso/Math.pow((altura)/100,2);

    console.log("Calculos IMC");
    console.log(auxIMC);
    console.log(y1[indice]);
    console.log(y2[indice]);
    console.log(y3[indice]);
    console.log(y4[indice]);
    console.log(ym[indice]);
    console.log(y5[indice]);
    console.log(y6[indice]);
    console.log(y7[indice]);
    console.log(y8[indice]);


    if (auxIMC <= y1[indice]) {
      //debajo la curva -2D
      console.log("Desnutricion severa");
      aux = "Bajo Peso. Percentil 0";


    }else if(auxIMC > y1[indice] && auxIMC <= y2[indice]){
      //sobre la curva -2D y debajo de la curva -1D

      aux = "Bajo Peso. Percentil 3"
    }else if (auxIMC > y2[indice] && auxIMC <= y3[indice]) {

      aux = "Bajo Peso. Percentil 5";
    }else if(auxIMC > y3[indice] && auxIMC <= y4[indice]){

      aux = "Peso Normal. Percentil 10";
    }else if(auxIMC > y4[indice] && auxIMC <= ym[indice]){

      aux = "Peso Normal. Percentil 25";
    }else if(auxIMC > ym[indice] && auxIMC <= y5[indice]){

      aux = "Peso Normal. Percentil 50";
    }else if(auxIMC > y5[indice] && auxIMC <= y6[indice]){

      aux = "Peso Normal. Percentil 75";
    }else if(auxIMC > y6[indice] && auxIMC <= y7[indice]){

      aux = "Peso Normal. Percentil 90";
    }else if(auxIMC > y7[indice] && auxIMC <= y8[indice]){

      aux = "Sobre Peso. Percentil 95";
    }else if(auxIMC > y8[indice]){

      aux = "Obesidad. Percentil 97";
    }
    console.log("Mensaje IMC:"+aux)
    return (aux);
  }


  public calculosPeso(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice){
    let aux="";

    if (peso <= y1[indice]) {
      //debajo la curva -2D
      console.log("Desnutricion severa");
      aux = "Desnutrición Severa (-2)";


    }else if(peso > y1[indice] && peso <= y2[indice]){
      //sobre la curva -2D y debajo de la curva -1D

      aux = "Desnutricion (Entre -2 y -1.5 )"
    }else if (peso > y2[indice] && peso <= y3[indice]) {

      aux = "Desnutricion leve(Entre -1.5 y -1.0)";
    }else if(peso > y3[indice] && peso <= y4[indice]){

      aux = "Riesgo de Desnutricion (Entre -1.0 y -0.5)";
    }else if(peso > y4[indice] && peso <= ym[indice]){

      aux = "NORMAL - Eutrofico (Entre -0.5 y 0)";
    }else if(peso > ym[indice] && peso <= y5[indice]){

      aux = "NORMAL - EUTROFICO (Entre 0 y 0.5)";
    }else if(peso > y5[indice] && peso <= y6[indice]){

      aux = "Riesgo de obesidad (Entre 0.5 y 1.0)";
    }else if(peso > y6[indice] && peso <= y7[indice]){

      aux = "Obesidad Leve(Entre 1.0 y 1.5)";
    }else if(peso > y7[indice] && peso <= y8[indice]){

      aux = "Obesidad (Entre 1.5 y 2.0)";
    }else if(peso > y8[indice]){

      aux = "Obesidad Severa(+2.0)";
    }
    return (aux);

  }

  public calculosAltura(xx,peso,altura,y1,y2,y3,y4,ym,y5,y6,y7,y8,indice){
    let aux="";



    if (altura <= y1[indice]) {
      //debajo la curva -2D

      aux = "Talla muy Baja (< -2D)";


    }else if(altura > y1[indice] && altura <= y2[indice]){
      //sobre la curva -2D y debajo de la curva -1D

      aux = "Talla muy Baja (Entre -2 y -1.5 )"
    }else if (altura > y2[indice] && altura <= y3[indice]) {

      aux = "Talla Baja (Entre -1.5 y -1.0)";
    }else if(altura > y3[indice] && altura <= y4[indice]){

      aux = "Talla Baja (Entre -1.0 y -0.5)";
    }else if(altura > y4[indice] && altura <= ym[indice]){

      aux = "Talla Normal - Eutrofico (Entre -0.5 y 0)";
    }else if(altura > ym[indice] && altura <= y5[indice]){

      aux = "Talla Normal (Entre 0 y 0.5)";
    }else if(altura > y5[indice] && altura <= y6[indice]){

      aux = "Talla Alta (Entre 0.5 y 1.0)";
    }else if(altura > y6[indice] && altura <= y7[indice]){

      aux = "Talla Alta (Entre 1.0 y 1.5)";
    }else if(altura > y7[indice] && altura <= y8[indice]){

      aux = "Talla Muy Alta(Entre 1.5 y 2.0)";
    }else if(altura > y8[indice]){

      aux = "Talla Muy Alta (+2.0)";
    }
    return (aux);
  }


}
