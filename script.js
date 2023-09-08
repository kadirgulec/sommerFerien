/* let sommerFerien = new Date("06/22/2023");
let today = new Date();

let dayDifference = (sommerFerien.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
dayDifference = dayDifference.toFixed(0);
dayDifference = dayDifference;
console.log(dayDifference );

let tag = document.querySelector(".tag");
let wochen = dayDifference / 7;
wochen = wochen.toFixed(0);
tag.innerHTML = dayDifference + "<br> Tagen <br><br>" + wochen + "<br> Wochen"; */


function daysOfYear(date){
var now = new Date(date);
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day
}
function daysOfYearToday(){
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day
}
elif = daysOfYear("10/01/2014") - daysOfYearToday();

let elifRemaining = document.querySelector("#elifRemainingDays");
elifRemaining.textContent = `${elif}`;

hilal = daysOfYear("11/18/2015") - daysOfYearToday();
let hilalRemaining  = document.querySelector("#hilalRemainingDays");
hilalRemaining.textContent = `${hilal}`