//Rest & Spread Operator

// Rest Parameter

// tanpa rest parameter 
// const penjumlahanArray = (a,b,c) => {
//     const array = [a, b, c];
//     let total = 0;
//     array.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3);

// dengan rest parameter
// const penjumlahanArray = (...params) => {
//     const array = [a, b, c];
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3);

// Spread Parameters


// Desctructuring
let buah = ["mangga", "pisang", "anggur"];
let [buah1, buah2, buah3] = buah;
console.log(buah);

let orang = {
    nama : "joko",
    umur : 35,
    sudahMenikah : true,
};

let {nama, umur: age, sudahMenikah} = orang;
console.log();