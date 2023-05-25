let sommerFerien = new Date("06/22/2023");
let today = new Date();

let dayDifference = (sommerFerien.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
dayDifference = dayDifference.toFixed(0);
dayDifference = dayDifference;
console.log(dayDifference );

let tag = document.querySelector(".tag");
let wochen = dayDifference / 7;
wochen = wochen.toFixed(0);
tag.innerHTML = dayDifference + "<br> Tagen <br><br>" + wochen + "<br> Wochen";