var personName = "Mansoor Ahmed";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titalcase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titalCase = firstLetter + restLetter;
console.log(titalCase);
