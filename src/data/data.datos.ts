export const DATOS = [
	{
		tipoGrafico:"1A",
		tituloGrafico:"Peso por edad NiÑAS de 0 a 24 meses. (Mediana y desviaciones estandar)",
		labels:["0", "1", "2", "3", "4", "5", "6", "7", "8",
                "9", "10", "11", "1 año", "1", "2", "3", "4", "5", "6", "7", "8",
                        "9", "10", "11", "2 años",],
		    dato1: [2.4,3.2,3.9,4.5,5.0,5.4,5.7,6.0,6.3,6.5,6.7,6.9,7.0,7.2,7.4,
                 7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.0,9.2],
        dato2: [2.8,3.6,4.5,5.2,5.7,6.1,6.5,6.8,7.0,7.3,7.5,7.7,7.9,8.1,8.3,
                 8.5,8.7,8.9,9.1,9.2,9.4,9.6,9.8,10.0,10.2,10.3],
        datoM: [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7,
                    8.9, 9.2, 9.6, 9.8, 10.0, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3,
                   11.5, 11.7],
        dato3: [3.7, 4.8, 5.8, 6.6, 7.3, 7.8, 8.2, 8.6, 9.0, 9.3, 9.6, 9.9,
                  10.1, 10.4, 10.6, 10.9, 11.1, 11.4, 11.6, 11.8, 12.1, 12.3,
                  12.5, 12.8, 13.0, 13.3],
        dato4: [4.2, 5.5, 6.6, 7.5, 8.2, 8.8, 9.3, 9.8, 10.2, 10.5, 10.9, 11.2,
                  11.5, 11.8, 12.1, 12.4, 12.6, 12.9, 13.2, 13.5, 13.7, 14.0,
                  14.3, 14.6, 14.8, 15.3]
	},
	{
		tipoGrafico:"2A",
		tituloGrafico:"Longitud por edad NIÑAS de 0 a 24 meses. (Mediana y desviaciones estandar)",
		labels:["0","1","2","3","4","5","6","7","8","9","10","11","1año",
                 "1","2","3","4","5","6","7","8","9","10","11","2años"],
		dato1: [45.4, 49.8, 53.0, 55.6, 57.8, 59.6, 61.2, 62.7,64.0,65.3,66.5
                  ,67.7,68.9,70.0,71.0,72.0,73.0,74.0,74.9,75.8,76.7,77.5,
                  78.4,79.2,80.0],
        dato2: [47.3, 51.7, 55.0, 57.7, 59.9, 61.8, 63.5, 65.0,66.4,67.7,69.0
                  ,70.3,71.4,72.6,73.7,74.8,75.8,76.8,77.8,78.8,79.7,80.6,81.4
                  ,82.3,83.2],
        datoM: [49.1, 53.7, 57.1, 59.8, 62.1, 64.0, 65.7, 67.3,68.7,70.1,71.5
                  ,72.8,74.0,75.2,76.4,77.5,78.6,79.7,80.7,81.7,82.7,83.7,84.6
                  ,85.5,86.4],
        dato3: [51.0, 55.6, 59.1, 61.9, 64.3, 66.2, 68.0, 69.6, 71.1,72.7,73.9
                  ,75.3,76.6,77.8,79.1,80.2,81.4,82.5,83.6,84.7,85.7,86.7,87.7
                  ,88.7,89.6],
        dato4: [52.9, 57.0, 61.1, 64.0, 66.4, 68.5, 70.3, 71.9, 73.5,75.0,76.4
                  ,77.8,79.2,80.5,81.7,83.0,84.2,85.4,86.5,87.6,88.7,89.8,90.8
                  ,91.9,92.9]
	},
	{
		tipoGrafico:"3A",
		tituloGrafico:"Peso por longitud NIÑAS de 50 a 75 cms. (Mediana y desviaciones estándar).",
		labels:["50","50.5","51.0","51.5","52.0","52.5", "53.0", "53.5", "54.0", "54.5", "55.0", "55.5", "56.0", "56.5",
                "57.0", "57.5", "58.0", "58.5", "59.0", "59.5", "60.0", "60.5", "61.0", "61.5", "62.0", "62.5", "63.0", "63.5",
                "64.0", "64.5", "65.0", "65.5", "66.0", "66.5", "67.0", "67.5", "68.0", "68.5", "69.0", "69.5" ,"70.0", "70.5",
                "71.0", "71.5", "72.0", "72.5", "73.0", "73.5", "74.0", "74.5", "75.0"],
		dato1: [2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,
                  3.8,3.9,4.0,4.1,4.3,4.4,4.5,4.6,4.7,4.8,
                  4.9,5.0,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,
                  5.9,6.0,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,
                  6.9,6.9,7.0,7.1,7.2,7.3,7.4,7.4,7.5,7.6,
                  7.7],
        dato2: [3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0,
                   4.2,4.3,4.4,4.5,4.6,4.8,4.9,5.0,5.1,5.3,
                   5.4,5.5,5.6,5.7,5.8,5.9,6.0,6.2,6.3,6.4,
                   6.5,6.6,6.7,6.8,6.9,7.0,7.1,7.2,7.3,7.4,
                   7.5,7.6,7.7,7.7,7.8,7.9,8.0,8.1,8.2,8.3,
                   8.4],
        datoM: [3.4,3.5,3.6,3.7,3.8,3.9,4.0,4.2,4.3,4.4,
                   4.5,4.7,4.8,5.0,5.1,5.2,5.4,5.5,5.6,5.7,
                   5.9,6.0,6.1,6.3,6.4,6.5,6.6,6.7,6.9,7.0,
                   7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.9,8.0,8.1,
                   8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9.0,9.1,
                   9.1],
        dato3: [3.7,3.8,3.9,4.0,4.2,4.3,4.4,4.6,4.7,4.8,
                   5.0,5.1,5.3,5.4,5.6,5.7,5.9,6.0,6.2,6.3,
                   6.4,6.6,6.7,6.9,7.0,7.1,7.3,7.4,7.5,7.6,
                   7.8,7.9,8.0,8.1,8.3,8.4,8.5,8.6,8.7,8.8,
                   9.0,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,
                   10.0],
        dato4: [4.0,4.2,4.3,4.4,4.6,4.7,4.9,5.0,5.1,5.3,
                   5.5,5.7,5.8,6.0,6.1,6.3,6.5,6.6,6.8,6.9,
                   7.1,7.3,7.4,7.6,7.7,7.8,8.0,8.1,8.3,8.4,
                   8.6,8.7,8.8,9.0,9.1,9.2,9.4,9.5,9.6,9.7,
                   9.9,10.0,10.1,10.2,10.3,10.5,10.6,10.7,10.8,10.9,
                  11.0],
	},
  {
    tipoGrafico:"4A",
    tituloGrafico:"Peso por longitud NIÑAS de 75 a 100 cms. (Mediana y desviaciones estándar).",
    labels:["75","75.5","76.0","76.5","77.0","77.5", "78.0", "78.5", "79.0", "79.5", "80.0", "80.5", "81.0", "81.5",
                "82.0", "82.5", "83.0", "83.5", "84.0", "84.5", "85.0", "85.5", "86.0", "86.5", "87.0", "87.5", "88.0", "88.5",
                "89.0", "89.5", "90.0", "90.5", "91.0", "91.5", "92.0", "92.5", "93.0", "93.5", "94.0", "94.5" ,"95.0", "95.5",
                "96.0", "96.5", "97.0", "97.5", "98.0", "98.5", "99.0", "99.5", "100.0"],
        dato1: [7.7,7.8,7.8,7.9,8.0,8.1,8.2,8.2,8.3,8.4,
                  8.5,8.6,8.7,8.8,8.8,8.9,9.0,9.1,9.2,9.3,
                  9.4,9.5,9.7,9.8,9.9,10.0,10.1,10.2,10.3,
                  10.4,10.5,10.6,10.7,10.8,10.9,11.0,11.1,11.2,11.3,
                  11.4,11.5,11.6,11.7,11.8,12.0,12.1,12.2,12.3,12.4,
                  12.5,12.6],
        dato2: [8.4,8.5,8.5,8.6,8.7,8.8,8.9,9.0,9.1,9.1,
                   9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10.1,10.2,
                   10.3,10.4,10.5,10.6,10.7,10.9,11.0,11.1,11.2,11.3,
                   11.4,11.5,11.7,11.8,11.9,12.0,12.1,12.2,12.3,12.4,
                   12.6,12.7,12.8,12.9,13.0,13.1,13.3,13.4,13.5,13.6,
                   13.7],
        datoM: [9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,
                   9.9,10.0,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.9,
                   11.0,11.1,11.2,11.3,11.5,11.6,11.7,11.8,12.0,12.1,
                   12.2,12.3,12.5,12.6,12.7,12.8,13.0,13.1,13.2,13.3,
                   13.5,13.6,13.7,13.8,14.0,14.1,14.2,14.4,14.5,14.6,
                   14.8,14.9,15.0],
        dato3: [10.0,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,
                   11.0,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12.0,12.1,
                   12.3,12.4,12.6,12.7,12.8,13.0,13.1,13.2,13.4,13.5,
                   13.7,13.8,13.9,14.1,14.2,14.3,14.5,14.6,14.7,14.9,
                   15.0,15.2,15.3,15.4,15.6,15.7,15.9,16.0,16.2,16.3,
                   16.5],
        dato4: [11.0,11.1,11.2,11.4,11.5,11.6,11.7,11.8,11.9,12.0,
                   12.1,12.3,12.4,12.5,12.6,12.8,12.9,13.1,13.2,13.3,
                   13.5,13.6,13.8,13.9,14.1,14.2,14.4,14.5,14.7,14.8,
                   15.0,15.1,15.3,15.5,15.6,15.8,15.9,16.1,16.2,16.4,
                   16.5,16.7,16.8,17.0,17.1,17.3,17.5,17.6,17.8,18.0,
                  18.1],
  },
  {
    tipoGrafico:"5A",
    tituloGrafico:"Peso por edad NIÑAS de 2 a 6 años. (Mediana y desviaciones estándar).",
    labels:["2.0 años","2.1","2.2","2.3","2.4","2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "3.0", "3.1",
                "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "4.0", "4.1", "4.2", "4.3",
                "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "5.0", "5.1", "5.2", "5.3" ,"5.4", "5.5",
                "5.6", "5.7", "5.8", "5.9", "5.10", "5.11", "6.0 años"],//49
        dato1: [9.0,9.2,9.4,9.5,9.7,9.8,10.0,10.1,10.3,10.4,
                  10.5,10.7,10.8,10.9,11.1,11.2,11.3,11.5,11.6,11.7,
                  11.8,12.0,12.1,12.2,12.3,12.4,12.6,12.7,12.8,
                  12.9,13.0,13.2,13.3,13.4,13.5,13.6,13.7,13.9,//13.8
                  14.0,14.1,14.2,14.3,14.4,14.5,14.6,14.7,14.8,14.9,
                  15],
        dato2: [10.2,10.3,10.5,10.7,10.9,11.1,11.2,11.4,11.6,11.7,
                   11.9,12,12.2,12.4,12.5,12.7,12.8,13,13.1,13.3,
                   13.4,13.6,13.7,13.9,14,14.2,14.3,14.5,14.6,14.8,
                   14.9,15.1,15.2,15.3,15.5,15.6,15.8,15.7,15.9,16,
                   16.1,16.2,16.4,16.5,16.6,16.7,16.9,17,17.1,17.3,
                   ],
        datoM: [11.5,11.7,11.9,12.1,12.3,12.5,12.7,12.9,
                   13.1,13.3,13.5,13.7,13.9,14,14.2,14.4,14.6,14.8,
                   15,15.2,15.3,15.5,15.7,15.9,16.1,16.3,16.4,16.6,
                   16.8,17,17.2,17.3,17.5,17.7,17.9,18,18.2,17.8,
                   18,18.1,18.3,18.4,18.6,18.7,18.9,19,19.2,19.4,19.5
                  ],
        dato3: [13.0,13.3,13.5,13.7,14,14.2,14.4,14.7,14.9,15.1,
                   15.4,15.6,15.8,16,16.3,16.5,16.7,16.9,17.2,17.4,
                   17.6,17.8,18.1,18.3,18.5,18.8,19,19.2,19.4,19.7,
                   19.9,20.1,20.3,20.6,20.8,21,21.2,20.6,20.8,21,
                   21.2,21.4,21.6,21.8,22,22.2,22.4,22.6,22.9
                  ],
        dato4: [14.8,15.1,15.4,15.7,16,16.2,16.5,16.8,17.1,17.3,
                   17.6,17.9,18.1,18.4,18.7,19,19.2,19.5,19.8,20.1,
                   20.4,20.7,20.9,21.2,21.5,21.8,22.1,22.4,22.6,22.9,
                   23.2,23.5,23.8,24.1,24.4,24.6,24.9,23.5,23.7,23.9,
                   24.1,24.4,24.6,24.9,25.1,25.4,25.7,25.9,26.2
                  ],
  }

];