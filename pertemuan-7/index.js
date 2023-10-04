//String Literal
//----------------

// let fullName = "Keyy Jenner";
// let age = 20;
// let address = "Aussie";

// //Hallo nama saya Keyy Jenner umur saha 20 tahun
// //dan saya tinggal di Aussie

// let kalimat5 = "Hallo nama saya" + fullName + ", umur saya" + age + ", dan saya tinggal di" + address;
// console.log(kalimat5)
//    // diatas adalah cara lama


// let kalimat6 = `Hallo nama saya ${fullName}. umur saya ${age}, dan saya tinggal di ${address}`;
// console.log(kalimat6);
//    // cara baru 

//Arrow Function
//----------------

// function sayGreetings5(nama) {
//     return `Hello ${nam}`;
// }

// console.log(sayGreetings5("John"));
// cara sebelumnya

// const sayGreetings6 = (nama) => {
//     return `Hello ${nama}`;
// }

// console.log(sayGreetings6());
// cara baru

//Implicit return value
// const sayGreetings6 = (nama) => `Hello ${nama}`;
// console.log(sayGreetings6());

//Pada IIFE
// (() => {
//     console.log("Hello");
// })();

// let output1 = (() => `Hello`)();
// console.log(output1);

//Pada Callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default Parameter
//------------------

// const sayGreetings = (fullName) => {
//     console.log(`Hello ${fullName}`);
// };

// sayGreetings("Keyy");

// const sayGreetings5 = (fullName, age) => {
//     if (fullName === undefined){
//         fullName = "Keyy Jenner";
//     }
//     if (age === undefined) {
//         age = 20;
//     }
//     console.log(`Hello ${fullName}`);
// };

// sayGreetings();
//Cara Lamaaaaa

//Cara baru
// const sayGreetings6 = (fullName = "Keyy Jenner", age = 20) => {
//     console.log(`Hello ${fullName}`);
// };

// sayGreetings6("Peter");