var current_users = ["Admin", "Ali", "Hamza", "Fatima"];
var new_users = ["Admin", "Fatima", "Aliza", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_userss = new_users_1[_i];
    if (current_users_lower.includes(new_userss.toLowerCase())) {
        console.log("Sorry ".concat(new_userss, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_userss, ", is still in avaliable list"));
    }
}
