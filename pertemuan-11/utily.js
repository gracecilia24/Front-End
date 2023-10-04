export let fullName = "Keyy Jenner";

export let numbers = [1, 2, 3 ,4 ,5];

export let Keyy = {
    fullName: "Keyy Jenner",
    age: 20,
    address: "Bitung",
};

let hello = () => {
    console.log("Hello Module");
};

export {fullName, numbers, Keyy}; // kalau mo export semua // export biasa
export default hello; // export default hanya boleh ada 1 saja , expoer default juga tidak perlu kurung kurawal