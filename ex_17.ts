let guests: string[] = ["Ali", "Bilal", "Carry", "Dawood", "hamza" ];

//console.log("Due to limited space, only two people can  be invited for dinner.");


//while (guests.length > 2 ) {
   //const removedGuest = guest.pop(); //Remove the last guest from the list
   //console.log(` Sorry, ${removedGuest}, you are no longer invited  to dinner.`)
//}

guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to the dinner. `);
});



let guest: string[] = ["Ali", "Bilal" ];

guest.pop();
guest.pop();


console.log("Final guest list", guests);














