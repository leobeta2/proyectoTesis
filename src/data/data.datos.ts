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
  },
  {
    tipoGrafico:"6A",
    tituloGrafico:"Estatura por edad NIÑAS de 2 a 6 años. (Mediana y desviaciones estándar).",
    labels:["2.0 años","2.1","2.2","2.3","2.4","2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "3.0", "3.1",
                "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "4.0", "4.1", "4.2", "4.3",
                "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "5.0", "5.1", "5.2", "5.3" ,"5.4", "5.5",
                "5.6", "5.7", "5.8", "5.9", "5.10", "5.11", "6.0 años"],//49
        dato1: [79.3,80.0,80.8,81.5,82.2,82.9,83.6,84.3,84.9,85.6,
                  86.2,86.8,87.4,88.0,88.6,89.2,89.8,90.4,90.9,91.5,
                  92.0,92.5,93.1,93.6,94.1,94.6,95.1,95.6,96.1,
                  96.6,97.1,97.6,98.1,98.5,99.0,99.5,99.9,100,//13.8
                  100.5,100.9,101.4,101.8,102.2,102.7,103.1,103.5,104,104.4,
                  104.8],
        dato2: [82.5,83.3,84.1,84.9,85.7,86.4,87.1,87.9,88.6,89.3,
                   89.9,90.6,91.2,91.9,92.5,93.1,93.8,94.4,95.0,95.6,
                   96.2,96.7,97.3,97.9,98.4,99.0,99.5,100.1,100.6,101.1,
                   101.6,102.2,102.7,103.2,103.7,104.2,104.7,104.5,105.0,105.4,
                   105.9,106.4,106.9,107.4,107.9,108.3,108.8,109.3,109.7
                   ],
        datoM: [85.7,86.6,87.4,88.3,89.1,89.9,90.7,91.4,
                   92.2,92.9,93.6,94.4,95.1,95.7,96.4,97.1,97.7,98.4,
                   99.0,99.7,100.3,100.9,101.5,102.1,102.7,103.3,103.9,104.5,
                   105.0,105.6,106.2,106.7,107.3,107.8,108.4,108.9,109.4,108.9,
                   109.4,110.0,110.5,111,111.6,112.1,112.6,113.1,113.6,114.1,114.6
                  ],
        dato3: [88.9,89.9,90.8,91.7,92.5,93.4,94.2,95.0,95.8,96.6,
                97.4,98.1,98.9,99.6,100.3,101.0,101.7,102.4,103.1,103.8,
                104.5,105.1,105.8,106.4,107.0,107.7,108.3,108.9,109.5,110.1,
                110.7,111.3,111.9,112.5,113.0,113.6,114.2,113.4,113.9,114.5,
                115.1,115.6,116.2,116.8,117.3,117.9,118.5,119.0,119.6
                  ],
        dato4: [92.2,93.1,94.1,95.0,96.0,96.9,97.7,98.6,
                   99.4,100.3,101.1,101.9,102.7,103.4,104.2,105.0,105.7,106.4,
                   107.2,107.9,108.6,109.3,110.0,110.7,111.3,112.0,112.7,113.3,
                   114.0,114.6,115.2,115.9,116.5,117.1,117.7,118.3,118.9,117.8,
                   118.4,119.0,120.3,120.9,121.5,122.1,122.7,123.3,123.9,124.5
                  ],
  },
  {
    tipoGrafico:"7A",
    tituloGrafico:"Peso por estatura NIÑAS de 85 a 130 cms. (Mediana y desviaciones estándar).",
    labels:["85","85.5","86.0","86.5","87.0","87.5", "88.0", "88.5", "89.0", "89.5", "90.0", "90.5", "91.0", "91.5",
                "92.0", "92.5", "93.0", "93.5", "94.0", "94.5", "95.0", "95.5", "96.0", "96.5", "97.0", "97.5", "98.0", "98.5",
                "99.0", "99.5", "100.0", "100.5", "101.0", "101.5", "102.0", "102.5", "103.0", "103.5", "104.0", "104.5" ,"105.0", "105.5",
                "106.0", "106.5", "107.0", "107.5", "108.0", "108.5", "109.0", "109.5", "110.0","110.5","111.0","111.5","112.0","112.5",
                "113.0", "113.5", "114.0","114.5","115.0","115.5","120.0", "120.0", "120.5","121.0", "121.5", "122.0", "122.5","123.0","123.5",
                "124.0","124.5","125.0","125.5","126.0","126.5","127.0","127.5","128.0","128.5","129.0","129.5","130"],
        dato1: [9.6,9.7,9.8,9.9,10.0,10.1,10.2,10.3,10.4,10.5,
                  10.6,10.7,10.9,11.0,11.1,11.2,11.3,11.4,11.5,11.6,
                  11.7,11.8,11.9,12.0,12.1,12.2,12.3,12.4,12.5,
                  12.7,12.8,12.9,13.0,13.1,13.3,13.4,13.5,13.6,//13.8
                  13.8,13.9,14.0,14.2,14.3,14.5,14.6,14.7,14.9,15.0,
                  15.2,15.4,15.5,15.7,15.8,16.0,16.2,16.3,16.5,16.7,16.8,
                  17.0,17.2,17.3,17.5,17.7,17.8,18.0,18.2,18.4,18.5,18.7,18.9,
                  18.1,18.2,18.4,18.6,18.8,18.9,18.1,18.2,18.4,18.6,18.8,18.9,
                  19.1,19.3,19.4,19.7,19.9,20.1,20.3,20.4,20.6,20.8,21.0,21.2,
                  21.4,21.6,21.9],
        dato2: [10.4,10.6,10.7,10.8,10.9,11.0,11.1,11.2,11.4,11.5,11.6,
                11.7,11.8,11.9,12.0,12.1,12.3,12.4,12.5,12.6,12.7,12.8,12.9,
                13.1,13.2,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.3,14.5,
                14.6,14.7,14.9,15.0,15.2,15.3,15.5,15.6,15.8,15.9,16.1,16.3,16.4,16.6,16.8,17.0,17.1,17.3,17.5,
                  17.7,17.9,18.0,18.2,18.4,18.6,18.8,19.0,19.2,19.4,
                  19.6,19.8,19.9,20.1,20.3,20.5,20.7,19.9,20.1,
                  20.3,20.5,20.7,20.9,21.1,21.3,21.5,21.8,22.0,22.2,22.4,22.6,//13.8
                  22.9,23.1,23.3,23.6,23.8,24.1,24.3],
        datoM: [11.4,11.5,11.6,11.8,11.9,12.0,12.1,12.3,12.4,12.5,12.6,12.8,12.9,
                 13.0,13.1,13.3,13.4,13.5,13.6,13.8,13.9,14.0,14.1,14.3,14.4,14.5,
                 14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.7,15.8,16.0,16.1,16.3,16.4,
                 16.6,16.8,16.9,17.1,17.3,17.5,17.7,17.8,18.0,18.2,18.4,18.6,18.8,
                 19.0,19.2,19.4,19.6,19.8,20.0,20.2,20.5,20.7,20.9,21.1,21.3,21.5,
                 21.7,22.0,22.2,22.4,22.6,22.8,21.8,22.0,22.2,22.5,22.7,22.9,
                 23.1,23.4,23.6,23.8,24.1,24.3,24.6,24.8,25.1,25.4,25.7,25.9,26.2,
                 26.5,26.8],
        dato3: [12.5,12.6,12.7,12.9,13.0,13.2,13.3,13.4,13.6,13.7,13.8,14.0,
                14.1,14.3,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.6,
                15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.9,17.0,17.2,17.4,17.5,
                17.7,17.9,18.1,18.2,18.4,18.6,18.8,19.0,19.2,19.4,19.6,19.8,
                20.0,20.3,20.5,20.7,20.9,21.2,21.4,21.6,21.8,22.1,22.3,22.6,
                22.8,23.0,23.3,23.5,23.8,24.0,24.5,24.7,25.0,25.2,24.4,24.7,
                24.9,25.0,25.5,25.8,26.1,26.4,26.7,27.0,27.3,27.6,28.0,28.3,
                28.7,29.0,29.4,29.8,30.2,30.6,31.0],
        dato4: [13.7,13.8,14.0,14.2,14.3,14.5,14.6,14.8,14.9,15.1,15.2,15.4,
                15.5,15.7,15.8,16.0,16.1,16.3,16.4,16.6,16.7,16.9,17.0,17.2,
                17.4,17.5,17.7,17.9,18.0,18.2,18.4,18.6,18.7,18.9,19.1,19.3,
                19.5,19.7,19.9,20.1,20.3,20.5,20.8,21.0,21.2,21.4,21.7,21.9,
                22.1,22.4,22.6,22.9,23.1,23.4,23.6,23.9,24.2,24.4,24.7,25.0,
                25.2,25.5,25.8,26.1,26.3,26.6,26.9,27.2,27.4,27.7,28.0,27.0,
                27.3,27.6,27.9,28.3,28.6,29.0,29.4,29.8,30.1,30.5,31.0,31.4,
                31.8,32.2,32.7,33.2,33.6,34.1,34.6,35.1
                  ],
  },
  {
    tipoGrafico:"1B",
    tituloGrafico:"Peso por edad NiÑoS de 0 a 24 meses. (Mediana y desviaciones estandar)",
    labels:["0", "1", "2", "3", "4", "5", "6", "7", "8",
      "9", "10", "11", "1 año", "1", "2", "3", "4", "5", "6", "7", "8",
      "9", "10", "11", "2 años",],
    dato1: [2.5,3.4,4.3,5.0,5.6,6.0,6.4,6.7,6.9,7.1,7.4,7.6,7.7,7.9,8.1,
            8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7],
    dato2: [2.9,3.9,4.9,5.7,6.2,6.7,7.1,7.4,7.7,8.0,8.2,8.4,8.6,8.8,9.0,
            9.2,9.4,9.6,9.8,10.0,10.1,10.3,10.5,10.7,10.8],
    datoM: [3.3,4.5,5.6,6.4,7.0,7.5,7.9,8.3,8.6,8.9,9.2,9.4,9.6,9.9,10.1,
            10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.8,12.0,12.2],
    dato3: [3.9,5.1,6.3,7.2,7.8,8.4,8.8,9.2,9.6,9.9,10.2,10.5,10.8,11.0,
            11.3,11.5,11.7,12.0,12.2,12.5,12.7,12.9,13.2,13.4,13.6],
    dato4: [4.4,5.8,7.1,8.0,8.7,9.3,9.8,10.3,10.7,11.0,11.4,11.7,12.0,
            12.3,12.6,12.8,13.1,13.4,13.7,13.9,14.2,14.5,14.7,15.0,15.3]
  },

  {
    tipoGrafico:"2B",
    tituloGrafico:"Longitud por edad NIÑOS de 0 a 24 meses. (Mediana y desviaciones estandar)",
    labels:["0","1","2","3","4","5","6","7","8","9","10","11","1año",
      "1","2","3","4","5","6","7","8","9","10","11","2años"],
    dato1: [46.1,50.8,54.4,57.3,59.7,61.7,63.3,64.8,66.2,67.5,68.7,69.9,71.0,
            72.1,73.1,72.1,73.1,74.1,75.0,76.0,76.9,77.7,78.6,79.4,80.2,81.0,81.7],
    dato2: [48.0,52.8,56.4,59.4,61.8,63.8,65.5,67.0,68.4,69.7,71.0,72.2,73.4,74.5,
            75.6,76.6,77.6,78.6,79.6,80.5,81.4,82.3,83.1,83.9,84.8],
    datoM: [49.9,54.7,58.4,61.4,63.9,65.9,67.6,69.2,70.6,72.0,73.3,74.5,75.7,76.9,
            78.0,79.1,80.2,81.2,82.3,83.2,84.2,85.1,86.0,86.9,87.8],
    dato3: [51.8,56.7,60.4,63.5,66.0,68.0,69.8,71.3,72.8,74.2,75.6,76.9,78.1,79.3,
            80.5,81.7,82.8,83.9,85.0,86.0,87.0,88.0,89.0,89.9,90.9],
    dato4: [53.7,58.6,62.4,65.5,68.0,70.1,71.9,73.5,75.0,76.5,77.9,79.2,80.5,81.8,
            83.0,84.2,85.4,86.5,87.7,88.8,89.8,90.9,91.9,92.9,93.9]
  },

  {
    tipoGrafico:"3B",
    tituloGrafico:"Peso por longitud NIÑ0S de 50 a 75 cms. (Mediana y desviaciones estándar).",
    labels:["50","50.5","51.0","51.5","52.0","52.5", "53.0", "53.5", "54.0", "54.5", "55.0", "55.5", "56.0", "56.5",
      "57.0", "57.5", "58.0", "58.5", "59.0", "59.5", "60.0", "60.5", "61.0", "61.5", "62.0", "62.5", "63.0", "63.5",
      "64.0", "64.5", "65.0", "65.5", "66.0", "66.5", "67.0", "67.5", "68.0", "68.5", "69.0", "69.5" ,"70.0", "70.5",
      "71.0", "71.5", "72.0", "72.5", "73.0", "73.5", "74.0", "74.5", "75.0"],
    dato1: [2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,
            3.8,4.0,4.1,4.2,4.3,4.5,4.6,4.7,4.8,5.0,
            5.1,5.2,5.3,5.4,5.6,5.7,5.8,5.9,6.0,6.1,
            6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,7.0,7.1,
            7.2,7.3,7.4,7.5,7.6,7.6,7.7,7.8,7.9,8.0,8.1],
    dato2: [3.0,3.1,3.2,3.3,3.5,3.6,3.7,3.8,3.9,4.0,
            4.2,4.3,4.4,4.6,4.7,4.8,5.0,5.1,5.3,5.4,
            5.5,5.6,5.8,5.9,6.0,6.1,6.2,6.4,6.5,6.6,
            6.7,6.8,6.9,7.0,7.1,7.2,7.3,7.5,7.6,7.7,
            7.8,7.9,8.0,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8],
    datoM: [3.3,3.4,3.5,3.6,3.8,3.9,4.0,4.1,4.3,4.4,
            4.5,4.7,4.8,5.0,5.1,5.3,5.4,5.6,5.7,5.9,
            6.0,6.1,6.3,6.4,6.5,6.7,6.8,6.9,7.0,7.1,
            7.3,7.4,7.5,7.6,7.7,7.9,8.0,8.1,8.2,8.3,
            8.4,8.5,8.6,8.8,8.9,9.0,9.1,9.2,9.3,9.4,9.5],
    dato3: [3.6,3.8,3.9,4.0,4.1,4.2,4.4,4.5,4.7,4.8,
            5.0,5.1,5.3,5.4,5.6,5.7,5.9,6.1,6.2,6.4,
            6.5,6.7,6.8,7.0,7.1,7.2,7.4,7.5,7.6,7.8,
            7.9,8.0,8.2,8.3,8.4,8.5,8.7,8.8,8.9,9.0,
            9.2,9.3,9.4,9.5,9.6,9.8,9.9,10.0,10.1,10.2,10.3],
    dato4: [4.0,4.1,4.2,4.4,4.5,4.6,4.8,4.9,5.1,5.3,
            5.4,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.8,7.0,
            7.1,7.3,7.4,7.6,7.7,7.9,8.0,8.2,8.3,8.5,
            8.6,8.7,8.8,9.0,9.2,9.3,9.4,9.6,9.7,9.8,
            10.0,10.1,10.2,10.4,10.5,10.6,10.8,10.9,11.0,11.2,11.3],
  },


];
