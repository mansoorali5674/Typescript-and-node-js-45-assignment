

const personName: string = "Mansoor Ahmed";

//lowercase
console.log(personName.toLowerCase());


//uppercase
console.log(personName.toUpperCase());




//titalcase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter:  string = personName.slice(1).toLowerCase();

let titalCase = firstLetter + restLetter;

console.log(titalCase);

