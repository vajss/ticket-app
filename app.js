
const d1 = subtractTime( new Date(), 4, 10);
document.getElementById("date1").innerText = formatDate(d1);
document.getElementById("divider1").innerText = formatDividerDate(d1);

const d2 = subtractTime( new Date(), 3, 10);
document.getElementById("date2").innerText = formatDate(d2);
document.getElementById("divider2").innerText = formatDividerDate(d2);

const d3 = subtractTime( new Date(), 1, 12);
document.getElementById("date3").innerText = formatDate(d3);
document.getElementById("divider3").innerText = formatDividerDate(d3);

const d4 = subtractTime( new Date(), 0, 5);
document.getElementById("date4").innerText = formatDate(d4);
document.getElementById("divider4").innerText = formatDividerTodayDate(d4);


function formatDividerTodayDate(date) {
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function formatDividerDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let dayOfWeek = daysOfWeek[date.getDay()];
    let day = String(date.getDate()).padStart(2, '0');
    let month = months[date.getMonth()];
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dayOfWeek}, ${day} ${month} ${hours}:${minutes}`;
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

function subtractTime(date, days, minutes) {
    date.setDate(date.getDate() - days);
    date.setMinutes(date.getMinutes() - minutes);
    return date;
}