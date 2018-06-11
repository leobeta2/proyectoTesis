import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {DATOS} from "../../data/data.datos"
import {SPLINE} from "../../data/data.spline"
import {DATOS2} from "../../data/data.datos2"



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
  banderasex:boolean;
  edad1: any;
  public cuartoGrafico = true;
  public tercerGrafico = true;
  public message1: string;
  public message2: string;
  public message3: string;
  public message4: string;
  public message5: string;
  mayor24: boolean;


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
    this.message1 = "No hay informacion para mostrar!!";
    this.message2 = "No hay informacion para mostrar!!";
    this.message3 = "No hay informacion para mostrar!!";
    //console.log(this.color);
    //console.log(this.peso);
    //console.log(this.date.day);
    //console.log("Este es el sexo");
    console.log(this.sex);
    //console.log("Day:");
    //console.log(this.dateTime);
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;


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

    console.log("Mes Actual"+mesActual);
    //console.log(anoActual);

    console.log("Mes Nacimiento"+mesNacimiento);


    let tipoGrafico1 = "";


    // numero de meses entre fecha de nacimiento y fecha actual
    const mesesT = this.dateTime.getMonth() - mesNacimiento + (12 * (this.dateTime.getFullYear() - anoNacimiento))+1;
    console.log("mesesT: "+ mesesT);

    if( mesesT <= 12){

      console.log("La diferencia mismo año");
      console.log(mesesT);
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


    }else if (mesesT > 12 && mesesT <= 24) {


      difAno = anoNacimiento - anoActual;

      console.log("La diferencia de 1 año");
      console.log(mesesT);
      if(this.sex == "Masculino"){
        index1 = 7;
        index2 = 8
      }else{
        console.log("1A");
        index1 =0;
        console.log("2A");
        index2 =1;
      }

    } else if (mesesT > 24 && mesesT <=36) {
      DosAnos = true;

      console.log("MESACTUAL: "+mesActual);//5
      console.log("MESNACIMIENTO:"+mesNacimiento);//1
      difAno = anoActual - anoNacimiento;


      //console.log("NADA");
      console.log("La diferencia de 2 año");
      console.log(mesesT);
      if(this.sex == "Masculino"){
        index1 = 11;
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }


    }else if (mesesT > 36 && mesesT <= 48 ) {
      DosAnos = true;

      difAno = anoActual - anoNacimiento;

      console.log("La diferencia de 3 año");
      console.log(mesesT);
      if(this.sex == "Masculino"){
        index1 = 11;
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }


    }else if(mesesT >48 && mesesT<= 60) {
      DosAnos = true;

      difAno = anoActual - anoNacimiento;

      console.log("La diferencia de 4 año");
      console.log(mesesT);
      if(this.sex == "Masculino"){
        index1 = 11;
        index2 = 12;
      }else{
        console.log("5A");
        index1 =4;
        console.log("6A");
        index2 =5;
      }


    }else if(mesesT > 60 && mesesT <=72){
      DosAnos = true;

      difAno = anoActual - anoNacimiento;

      console.log("La diferencia de 5 año");
      console.log(mesesT);
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
        DosAnos = true;
        console.log("sE SUPERAN LOS 6 AÑOS");
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

      if(altura > 75 && altura <=99){
        console.log("4A");
        this.tercerGrafico = true;
        this.cuartoGrafico = false;

        if(this.sex == "Masculino"){
          index3 = 10;
        }else{
          index3= 3;
        }

      }

      if(altura >=100 && altura <= 130){
        console.log("Aqui estoy??")
        if(this.sex=="Masculino"){
          console.log("7B");
          index3 = 13;
        }else{
          console.log("7A");
          index3 = 6;
        }
      }
    }else{
      console.log("No hay datos para esa estatura");
    }
    console.log(altura);

    this.edad1 = mesesT;

    this.t1 = DATOS[index1].tituloGrafico;
    this.t2 = DATOS[index2].tituloGrafico;
    this.t3 = DATOS[index3].tituloGrafico;


    //let labelGrafico1 = DATOS[index1].labels;
    //let dato1Grafico1 = DATOS[index1].dato1;
    //let dato2Grafico1 = DATOS[index1].dato2;
    //let datoMGrafico1 = DATOS[index1].datoM;
    //let dato3Grafico1 = DATOS[index1].dato3;
    //let dato4Grafico1 = DATOS[index1].dato4;






    const labels = DATOS[0].labels;
    let tipoGraficolocal1 = DATOS[index1].tipoGrafico || 0;
    let tipoGraficolocal2 = DATOS[index2].tipoGrafico || 0;
    let tipoGraficolocal3 = DATOS[index3].tipoGrafico || 0;





    this.message1 = this.mensajePercentil(tipoGraficolocal1,mesesT,difAno,peso,altura);
    this.message2 = this.mensajePercentil(tipoGraficolocal2,mesesT,difAno,peso,altura);
    this.message3 = this.mensajePercentil(tipoGraficolocal3,mesesT,difAno,peso,altura);
    this.mayor24 = false;

  this.calculoIMC(this.peso,this.color,mesesT);

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


    // LOS PUNTOS PARA INDICAR LA POSICION EN EL GRAFICO
    let puntoPeso = this.PointPositionPeso(this.peso,mesesT, DosAnos);
    let puntoAltura = this.PointPositionAltura(this.color,mesesT, DosAnos);
    let puntoLongitudPeso = this.PointPositionPesoLongitud(this.peso,this.color);

    console.log("punto tercer y cuarto graficos"+puntoLongitudPeso);

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
            data: DATOS[index2].dato1,
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
  }




  }

    public  mensajePercentil(tipoGrafico,mesesT,difAno, peso,altura){
      let auxMessage= "";
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
            if (mesesT == xx[i]) {
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
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);




        // console.log("Resultado: "+y1);
        console.log("Dif MeS: "+mesesT);

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
            if (mesesT == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 2A");
        auxMessage = this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);

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
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '5A'){
        xx = SPLINE[4].x;
        y1 = SPLINE[4].menos2D;
        y2 = SPLINE[4].menos1D;
        ym = SPLINE[4].media;
        y3 = SPLINE[4].mas1D;
        y4 = SPLINE[4].mas2D;

        //  console.log("EJe xx:.........."+xx);
        // console.log("Peso indice:......."+y1);
        // console.log("Peso indice:......."+y2);
        // console.log("Peso indice:......."+ym);
        // console.log("Peso indice:......."+y3);
        // console.log("Peso indice:......."+y4);

        console.log("difAno: ..." + difAno);
        console.log("difmeses: ..."+ mesesT);

        for (let i = 0; i < xx.length; i++) {
            if (difAno == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 5A");
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
        auxMessage = this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];

        }
        console.log("INDICE EN 7A: "+indice);
            console.log("Diferencia año: "+difAno);
        console.log("Para grafico 7A");
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      if(tipoGrafico == '1B'){
        console.log("Estoy en 1B");
        xx = SPLINE[7].x;
        y1 = SPLINE[7].menos2D;
        y2 = SPLINE[7].menos1D;
        ym = SPLINE[7].media;
        y3 = SPLINE[7].mas1D;
        y4 = SPLINE[7].mas2D;
        //console.log("EJe xx:.........."+xx);
        //console.log("Peso indice:......."+y1);
        //console.log("Peso indice:......."+y2);
        //console.log("Peso indice:......."+ym);
        //console.log("Peso indice:......."+y3);
        //console.log("Peso indice:......."+y4);
        //
        // console.log("Dif Meses:....."+mesesT);
        for (let i = 0; i < xx.length; i++) {
            if (mesesT == xx[i]) {
              indice= i;

            }
            xx[i];
            //console.log(indice);
        }
        console.log(indice);
        console.log("Para grafico 1B");
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);

      }
      if(tipoGrafico == '2B'){
        xx = SPLINE[8].x;
        y1 = SPLINE[8].menos2D;
        y2 = SPLINE[8].menos1D;
        ym = SPLINE[8].media;
        y3 = SPLINE[8].mas1D;
        y4 = SPLINE[8].mas2D;

        console.log("Para grafico 2B");

        console.log("EJe xx:.........."+xx);

        console.log("Dif Meses:....."+mesesT);


        for (let i = 0; i < xx.length; i++) {
            if (mesesT == xx[i]) {
              indice= i;

            }
            xx[i];

        }
        console.log("indice actual en 2B"+indice);
        auxMessage = this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);

      }
      if(tipoGrafico == '3B'){
        xx = SPLINE[9].x;
        y1 = SPLINE[9].menos2D;
        y2 = SPLINE[9].menos1D;
        ym = SPLINE[9].media;
        y3 = SPLINE[9].mas1D;
        y4 = SPLINE[9].mas2D;
        alt = Math.round(altura);// por mientras
        for (let i = 0; i < xx.length; i++) {
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 3B");
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
        auxMessage = this.calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice);
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
            if (alt == xx[i]) {
              indice= i;

            }
            xx[i];
            console.log(indice);
        }
        console.log("Para grafico 7B");
        auxMessage = this.calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice);
      }
      //console.log("Mensaje:......." +auxMessage);



      //console.log(tipoGrafico);
      //console.log(mesesTTotales);
      //console.log(peso);
      //console.log(altura);
      return (auxMessage);
    }//fin funcion mensajePercentil

    public calculosPeso(xx,peso,altura,y1,y2,ym,y3,y4,indice){
      console.log("Calculos Peso!!");
      console.log("Peso:........."+peso);
      console.log("Indice:......."+indice);
      console.log(y1[indice]);
      console.log(y2[indice]);
      console.log(ym[indice]);
      console.log(y3[indice]);
      console.log(y4[indice]);

      let aux="";
      if (peso < y1[indice]) {
        //debajo la curva -2D
        console.log("Desnutricion severa");
        aux = "Desnutrición (-2D)";

      }else if (peso == y1[indice]){
        //en la curva -2D
        console.log("Riesgo de Desnutricion");
        aux = "Desnutrición (-2D)";

      }else if(peso > y1[indice] && peso < y2[indice]){
        //sobre la curva -2D y debajo de la curva -1D

        aux = "Riesgo de Desnutricion(Entre -2D y -1D )"
      }else if (peso > y2[indice] && peso <= ym[indice]) {

        aux = "NORMAL - Eutrofico (Entre -1D y Media )";
      }else if(peso == ym[indice]){

        aux = "NORMAL - Eutrofico";
      }else if(peso > ym[indice] && peso <= y3[indice]){

        aux = "NORMAL - Eutrofico (Entre Media y +1D)";
      }else if(peso == y3[indice]){

        aux = "Riesgo de obesidad";
      }else if(peso > y3[indice] && peso <= y4[indice]){

        aux = "Riesgo de obesidad (Entre +1D y +2D)";
      }else if(peso > y4[indice]){

        aux = "Obesidad (+2D)";
      }
      return (aux);
    }

    public calculosLongitudAltura(xx,peso,altura,y1,y2,ym,y3,y4,indice){
      console.log("Calculos LOngitud y altura");
      let aux= "";
      console.log(y1[indice]);
      console.log(y2[indice]);
      console.log(ym[indice]);
      console.log(y3[indice]);
      console.log(y4[indice]);
      if (altura < y1[indice]) {
        //debajo la curva -2D

        aux = "Talla muy Baja (< -2D)";
      }else if (altura == y1[indice]){
        //en la curva -2D
        aux = "Talla muy Baja (-2D)";

      }else if(altura > y1[indice] && altura < y2[indice]){
        //sobre la curva -2D y debajo de la curva -1D

        aux = "Talla Baja (entre -2D y -1D )";
      }else if (altura > y2[indice] && altura < ym[indice]) {

        aux = "Talla Normal - Eutrofico (entre -1D y M )";
      }else if(altura == ym[indice]){

        aux = "Talla Normal - Eutrofico";
      }else if(altura > ym[indice] && altura < y3[indice]){

        aux = "Talla Normal - Eutrofico (entre M y +1D)";
      }else if(altura == y3[indice]){

        aux = "Talla Alta";
      }else if(altura > y3[indice] && altura < y4[indice]){

        aux = "Talla Alta (ENtre +1D y +2D)";
      }else if(altura >= y4[indice]){

        aux = "Talla muy Alta (+2D)";

      }
      return (aux);
    }

    public PointPositionPeso(peso,Meses,DosAnos){

      let tam2 = 3;
      let a = [];
      if (DosAnos == true){
        Meses = Meses - 24;
      }
      for (let i=0; i < Meses;i++){
        a.push(null);

      }
      a.push(peso);
      console.log("Peso"+ a);

      return(a);
    }

  public PointPositionAltura(Altura,Meses,DosAnos){
    console.log("ENtre??!?!?!?");
    let tam2 = 3;
    let a = [];
    if (DosAnos == true){
      Meses = Meses - 24;
    }
    for (let i=0; i < Meses;i++){
      a.push(null);

    }
    a.push(Altura);
    console.log("Altura"+ a);

    return(a);
  }
  public PointPositionPesoLongitud(Peso,longitud){
    let a = [];
    console.log("Point Position Longitud!!!!");
    console.log("LONGIUD Antes 1: "+longitud);
    if (longitud >= 50 && longitud < 75) {
      longitud = longitud -50;
      console.log("LONGIUD despues 1: "+longitud);
      for (let i=0; i < longitud;i++){
        //console.log(i);
        a.push(null);
        a.push(null);
      }
    }
    if (longitud >= 75 && longitud < 100) {
      longitud = longitud -75;
      console.log("LONGIUD despues 1: "+longitud);
      for (let i=0; i < longitud;i++){
        //console.log(i);
        a.push(null);
        a.push(null);

      }
    }

    if (longitud >= 100 && longitud <=130 ) {

    longitud = longitud -85;
    console.log("LONGIUD despues 1: "+longitud);
    for (let i=0; i < longitud;i++){
      //console.log(i);
      a.push(null);
      a.push(null);


      }
    }


    a.push(Peso);


    //console.log("PesoLongitud:"+ a);
    return(a);
  }

  public calculoIMC(peso,longitud,meses){
    let imc;
    let imcR;
    if(meses >=24){
      this.mayor24=true;
    }

    imc = peso/Math.pow((longitud)/100,2);
    imcR = Math.round(imc * 100) / 100;
    console.log("IMC: "+imc);
    console.log("IMC R:"+imcR);
    this.message4 = imcR;

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

  }





  }
