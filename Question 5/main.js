// Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
var time_messeg = new Date(5).getHours();
if (time_messeg >= 5 && time_messeg < 12) {
    console.log("Good Morning");
}
else if (time_messeg >= 12 && time_messeg < 17) {
    console.log("Good Evening");
}
else if (time_messeg >= 17 && time_messeg < 20) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Night");
}
