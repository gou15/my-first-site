let hour = 23.8;
if (hour >= 5 && hour <= 12) {console.log("Good morning");}
else if (hour > 12 && hour < 18) {console.log("Good afternoon");}
else if (hour >= 18 && hour < 22) {console.log("Good evening");}
else if (hour >= 22 && hour < 24 || hour >= 0 && hour < 5) {console.log("Good night");}
else if (hour >= 24 || hour < 0) {console.log ("Not a valid hour")}