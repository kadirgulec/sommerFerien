let sommerFerien = new Date("06/22/2023");
let today = new Date();

let dayDifference = (sommerFerien.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
dayDifference = dayDifference.toFixed(0);
console.log(dayDifference );

let tag = document.querySelector(".tag");
tag.innerHTML = dayDifference + " Tags zu Sommerferien";