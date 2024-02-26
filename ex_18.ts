let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan",];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order after sorting:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse())


console.log("Original order after reverse sorting:", placesToVisit);


placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);



placesToVisit.reverse();
console.log("Back to the original order:", placesToVisit);

placesToVisit.reverse();
console.log("Sorted in alphabetical order:", placesToVisit);


placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);












