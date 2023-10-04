//Class in JS

//Object literal
// const mobiltesla= {
//     transmisi : 'Manual',
//     bahanBakar : 'Bensin',
//     mesin : 1500,
//     nyalakanMesin: function(){
//         console.logz('Mobil ${this.transmisi} dinyalakan')
//     },
// };

// const mobilhrv= {
//     transmisi : 'Automatic',
//     bahanBakar : 'Solar',
//     mesin : 5500,
//     nyalakanMesin: function(){
//         console.logz('Mobil ${this.transmisi} dinyalakan')
//     },
// };

// class Mobil {
//     constructor(transmisi, bahanBakar, mesin){ // jalan secara otomatis ketika kita creat object
//         this.transmisi = transmisi;
//         this.bahanBakar = bahanBakar;
//         this.mesin = mesin;
//     }
//     nyalakanMesin(){
//         console.log(`Mobil ${this.transmisi} dinyalakan`);
//     }
// }

// const mobiltesla = new Mobil("Manual", "Bensin", 1500);
// mobiltesla.nyalakanMesin();
// const mobilhrv = new Mobil("Automatic", "Solar", 5500);
// mobilhrv.nyalakanMesin
// console.log(mobiltesla,mobilhrv);

// class Toyota extends Mobil{
//     constructor(merek, warna, transmisi, bahanBakar, mesin) {
//         super(transmisi, bahanBakar, mesin);
//         this.merek = merek;
//         this.warna = warna;
//     }
// }

// //Overriding
// nyalakanMesin(){
//     console.log(`Mobil merek ${this.merek} dinyalakan`);

// }

// const agya = new Toyota("Agya", "Putih", "Automatic", "Bensin", 1505);
// agya.nyalakanMesin();
// console.log(agya);
