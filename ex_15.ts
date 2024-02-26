//Task 15
let guestarray : string[] = ["mehak","Mansoor", "Ali", "Haseeb",];
let canNotAttend : string = "mehak"

//console.log(canNotAttend  + " "   "can not attend the dinner." )

let newGuest : string = "Muzamil"

guestarray [guestarray.indexOf(canNotAttend)] = newGuest;


//console.log(guestarray)

guestarray.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`)
)




