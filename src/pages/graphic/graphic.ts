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
            label: "Media",
            fill: false,
            lineTension: 0.001,
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

          }, {
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
        ]
      }

    });

    this.lineCanvas2 = new Chart(this.lineCanvas2.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,

          }
        ]
      }

    });



    }
  }
