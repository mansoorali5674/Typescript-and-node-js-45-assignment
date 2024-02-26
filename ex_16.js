//Task 16
var guestarr = ["Alishba", "Haseeb", "Ali", "Hamza",];
var canNotAttendd = "Ali";
var newGues = "Wajahat";
guestarr[guestarr.indexOf(canNotAttendd)] = newGues;
console.log(guestarr);
//guestarr.map((items) =>
//console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
//)
//part 2
var guestBeg = "Muizz";
guestarr.unshift(guestBeg);
//part 3 Middle
var middleGuest = "Fatima";
var middleIndex = guestarr.length / 3;
guestarr.splice(middleIndex, 0, middleGuest);
console.log(guestarr);
//Part 4 append
guestarr.push("Fatima");
console.log(guestarr);
//Part 5
guestarr.map(function (items) {
    return console.log(" Dear ".concat(items, ", you are invited in the more people list  on dinner"));
});
