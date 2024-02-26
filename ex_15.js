//Task 15
var guestarray = ["mehak", "Mansoor", "Ali", "Haseeb",];
var canNotAttend = "mehak";
//console.log(canNotAttend  + " "   "can not attend the dinner." )
var newGuest = "Muzamil";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
//console.log(guestarray)
guestarray.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
