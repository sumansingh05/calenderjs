const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("DOMContentLoaded", ()=> {
    const d = new Date();
    console.log(d);
    console.log("month",d.getMonth());
    console.log("day",d.getDay());
    console.log("date",d.getDate());
    console.log("year",d.getFullYear());

    day.textContent = dayNames[d.getDay()];
    date.textContent = d.getDate();
    year.textContent = d.getFullYear();
    month.textContent = monthNames[d.getMonth()];
});