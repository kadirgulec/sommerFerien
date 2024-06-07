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
function remainingDays(date){
    let remainingDays = daysOfYear(date) - daysOfYearToday();
    remainingDays < 0 ? remainingDays = 365 + remainingDays : remainingDays;
    return remainingDays
}
let elif = remainingDays("10/01/2014");
let elifRemaining = document.querySelector("#elifRemainingDays");
elifRemaining.textContent = `${elif}`;

let hilal = remainingDays("11/18/2015");
let hilalRemaining  = document.querySelector("#hilalRemainingDays");
hilalRemaining.textContent = `${hilal}`;

let kaan = remainingDays("09/11/2017") ;
let kaanRemaining  = document.querySelector("#kaanRemainingDays");
kaanRemaining.textContent = `${kaan}`;

let tr = remainingDays("06/14/2024") ;
let trRemaining  = document.querySelector("#trRemainingDays");
trRemaining.textContent = `${tr}`;

let de = remainingDays("07/05/2017") ;
let deRemaining  = document.querySelector("#deRemainingDays");
deRemaining.textContent = `${de}`;