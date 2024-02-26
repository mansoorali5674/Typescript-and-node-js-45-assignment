var guests = ["Ali", "Bilal", "Carry", "Dawood", "hamza"];
//console.log("Due to limited space, only two people can  be invited for dinner.");
//while (guests.length > 2 ) {
//const removedGuest = guest.pop(); //Remove the last guest from the list
//console.log(` Sorry, ${removedGuest}, you are no longer invited  to dinner.`)
//}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to the dinner. "));
});
var guest = ["Ali", "Bilal"];
guest.pop();
guest.pop();
console.log("Final guest list", guests);
