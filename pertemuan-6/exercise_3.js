//ForLoop
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

//ForEach
// let people = ["Greg", "Mary", "Devon", "james"];

// people.forEach(function(person){
//     console.log(person);
// });

//Remove "Greg"
let people = ["Greg", "Mary", "Devon", "James"];
let indexToRemove = people.indexOf("Greg");

if (indexToRemove !== -1){
    people.splice(indexToRemove, 1);
}

console.log(people);