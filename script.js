const dateElement = document.getElementById('current-date')
const dayElement = document.getElementById('current-day')

const monthElement = document.getElementById('current-month')
const yearElement = document.getElementById('current-year')

const hourElement = document.getElementById('hours')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')

// Array of days and months to work with

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClockandCalender(){
    const now = new Date();

    //updating the time
    hourElement.textContent = String(now.getHours()).padStart(2, '0')
    minuteElement.textContent = String(now.getMinutes()).padStart(2, '0')
    secondElement.textContent = String(now.getSeconds()).padStart(2, '0')

    //updating the clock/date
    dateElement.textContent = String(now.getDate()).padStart(2, '0');
    dayElement.textContent = weekDays[now.getDay()]
    monthElement.textContent = monthNames[now.getMonth()];
    yearElement.textContent = now.getFullYear();
}

// updating the clock every second

setInterval(updateClockandCalender, 1000);

updateClockandCalender()