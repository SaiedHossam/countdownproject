const mounths = ['jan', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const weak = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];

let deadTime = new Date(2023,10,16,14,9);

let content = document.querySelector('.content h5');
content.textContent = `giveaway ends on ${weak[deadTime.getDay()]}, 
${deadTime.getDate()} ${mounths[deadTime.getMonth()]} ${deadTime.getFullYear()} ${deadTime.getHours()}:${deadTime.getMinutes()}`;

let daysCont = document.querySelector('.days h2');
let hoursCont = document.querySelector('.hours h2');
let minsCont = document.querySelector('.mins h2');
let secsCont = document.querySelector('.sec h2');
let countDown = document.querySelector('.countdown');

// calling the function
let count = setInterval(getRemainingTime,1000);

// creating a function
function getRemainingTime() {

    let thisDate = new Date();

    let diff = deadTime - thisDate;
    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = 1000 * 60 * 60;
    const oneMin = 1000 * 60;

    if (diff <= 0) {
        clearInterval(count);
        countDown.innerHTML = `<h3>sorry, this givaway has expired.</h3>`;
    };

    let days = Math.floor(diff / oneDay);
    let hours = Math.floor((diff % oneDay) / oneHour);
    let mins = Math.floor((diff % oneHour) / oneMin);
    let secs = Math.floor((diff % oneMin) / 1000);

    daysCont.textContent = days < 10 ? `0${days}` : days;
    hoursCont.textContent = hours < 10 ? `0${hours}` : hours;
    minsCont.textContent = mins < 10 ? `0${mins}` : mins;
    secsCont.textContent = secs < 10 ? `0${secs}` : secs;
};