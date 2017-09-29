import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

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

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas2') lineCanvas2;


  lineChart: any;
  lineChart2: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphicPage');

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8",
                "9", "10", "11", "1 año", "1", "2", "3", "4", "5", "6", "7", "8",
                        "9", "10", "11", "2 años",],
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
           data: [2.4,3.2,3.9,4.5,5.0,5.4,5.7,6.0,6.3,6.5,6.7,6.9,7.0,7.2,7.4,
                 7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.0,9.2]
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
           data: [2.8,3.6,4.5,5.2,5.7,6.1,6.5,6.8,7.0,7.3,7.5,7.7,7.9,8.1,8.3,
                 8.5,8.7,8.9,9.1,9.2,9.4,9.6,9.8,10.0,10.2,10.3]
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
            pointBorderColor: "rgba(255, 51, 178,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7,
                    8.9, 9.2, 9.6, 9.8, 10.0, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3,
                   11.5, 11.7],
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
            data: [3.7, 4.8, 5.8, 6.6, 7.3, 7.8, 8.2, 8.6, 9.0, 9.3, 9.6, 9.9,
                  10.1, 10.4, 10.6, 10.9, 11.1, 11.4, 11.6, 11.8, 12.1, 12.3,
                  12.5, 12.8, 13.0, 13.3],
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
            data: [4.2, 5.5, 6.6, 7.5, 8.2, 8.8, 9.3, 9.8, 10.2, 10.5, 10.9, 11.2,
                  11.5, 11.8, 12.1, 12.4, 12.6, 12.9, 13.2, 13.5, 13.7, 14.0,
                  14.3, 14.6, 14.8, 15.3],
            spanGaps: false,

          }
        ]
      }

    });

    this.lineCanvas2 = new Chart(this.lineCanvas2.nativeElement, {

      type: 'line',
      data: {
        labels: ["0","1","2","3","4","5","6","7","8","9","10","11","1año",
                 "1","2","3","4","5","6","7","8","9","10","11","2años"],
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
            data: [45.4, 49.8, 53.0, 55.6, 57.8, 59.6, 61.2, 62.7,64.0,65.3,66.5
                  ,67.7,68.9,70.0,71.0,72.0,73.0,74.0,74.9,75.8,76.7,77.5,
                  78.4,79.2,80.0],
            spanGaps: false,

          },
          {
            label: "-1DE",
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
            data: [47.3, 51.7, 55.0, 57.7, 59.9, 61.8, 63.5, 65.0,66.4,67.7,69.0
                  ,70.3,71.4,72.6,73.7,74.8,75.8,76.8,77.8,78.8,79.7,80.6,81.4
                  ,82.3,83.2],
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
            data: [49.1, 53.7, 57.1, 59.8, 62.1, 64.0, 65.7, 67.3,68.7,70.1,71.5
                  ,72.8,74.0,75.2,76.4,77.5,78.6,79.7,80.7,81.7,82.7,83.7,84.6
                  ,85.5,86.4],
            spanGaps: false,

          },
          {
            label: "1DE",
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
            data: [51.0, 55.6, 59.1, 61.9, 64.3, 66.2, 68.0, 69.6, 71.1,72.7,73.9
                  ,75.3,76.6,77.8,79.1,80.2,81.4,82.5,83.6,84.7,85.7,86.7,87.7
                  ,88.7,89.6],
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
            data: [52.9, 57.0, 61.1, 64.0, 66.4, 68.5, 70.3, 71.9, 73.5,75.0,76.4
                  ,77.8,79.2,80.5,81.7,83.0,84.2,85.4,86.5,87.6,88.7,89.8,90.8
                  ,91.9,92.9],
            spanGaps: false,

          },
        ]
      }

    });



    }
  }
