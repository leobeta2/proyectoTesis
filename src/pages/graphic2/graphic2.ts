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

@IonicPage()
@Component({
  selector: 'page-graphic2',
  templateUrl: 'graphic2.html',
})
export class Graphic2Page {

  @ViewChild('graphicsA1') graphicsA1;
  A1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Graphic2Page');
    this.A1 = new Chart(this.graphicsA1.nativeElement, {

        type: 'line',
        data: {
          labels: DATOS2[5].labels,
          datasets: [
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato1,
              spanGaps: false,
           }
            ,
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato2,
              spanGaps: false,
            }
            ,

            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato3,
              spanGaps: false,

            },
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato4,
              spanGaps: false,

            },
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].datoM,
              spanGaps: false,

            }
            ,
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato5,
              spanGaps: false,

            },
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato6,
              spanGaps: false,

            },
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato7,
              spanGaps: false,

            },
            {
              label: "+1DE",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255, 51, 178,0.4)", //caja
              borderColor: "rgba(255, 51, 178,0.4)", //linea
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255, 51, 178,0.4)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderColor: "rgba(255, 51, 178,0.4)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: DATOS2[5].dato8,
              spanGaps: false,

            }


          ]
        }

      });
  }


}
