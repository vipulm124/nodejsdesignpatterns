var localStorage = require('./localStorage');

console.log('localStorage length: ', localStorage.length);

var uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
    console.log("UserId not found. Setting the user id and token...");
    localStorage.setItem("token", "kjdhlkjhglkjhg");
    localStorage.setItem("user_id", "12345");
} else {
    console.log("UserId found.", uid);
    console.log("clearing the UserId...");
    localStorage.clear();
}