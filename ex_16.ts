//Task 16
let guestarr : string[] = ["Alishba", "Haseeb", "Ali", "Hamza",];

let canNotAttendd : string = "Ali"



let newGues : string = "Wajahat"

guestarr[guestarr.indexOf(canNotAttendd)] = newGues;

console.log(guestarr)


//guestarr.map((items) =>
//console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
//)

//part 2
let guestBeg : string = "Muizz"

guestarr.unshift(guestBeg)


//part 3 Middle
let middleGuest : string = "Fatima"
let middleIndex = guestarr.length/3
guestarr.splice(middleIndex,0,middleGuest)

console.log(guestarr)




//Part 4 append
guestarr.push("Fatima")
console.log(guestarr)

//Part 5
guestarr.map((items) =>
console.log(` Dear ${items}, you are invited in the more people list  on dinner`));











