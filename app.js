document.getElementById("ticketNumber1").innerText = "00" + Math.floor((subtractTime( new Date(), 2, -91).getTime() / 1000) / 67.84);
document.getElementById("date1").innerText = formatDate(subtractTime( new Date(), 3, -82));
document.getElementById("divider1").innerText = formatDividerDate(subtractTime( new Date(), 3, -8));

document.getElementById("ticketNumber2").innerText = "00" + Math.floor((subtractTime( new Date(), 2, -91).getTime() / 1000) / 67.84);
document.getElementById("date2").innerText = formatDate(subtractTime( new Date(), 2, -91));
document.getElementById("divider2").innerText = formatDividerDate(subtractTime( new Date(), 2, 9));

document.getElementById("ticketNumber3").innerText = "00" + (Math.floor((subtractTime( new Date(), 1, -83).getTime() / 1000) / 67.84) + 1);
document.getElementById("date3").innerText = formatDate(subtractTime( new Date(), 1, -91));
document.getElementById("divider3").innerText = formatDividerDate(subtractTime( new Date(), 1, 9));

// TODO check in more detail 67.84 constant
document.getElementById("ticketNumber4").innerText = "00" + Math.floor(((new Date()).getTime() / 1000) / 67.84);
document.getElementById("date4").innerText = formatDate(subtractTime( new Date(), 0, -85));
document.getElementById("divider4").innerText = formatDividerTodayDate(subtractTime( new Date(), 0, 5));

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