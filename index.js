const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");
const digitalClock = document.querySelector(".digital-clock");
function setDate() { 
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = ` rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    const hours = now.getHours();
    const hoursDegrees = (hours / 12 * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    digitalClock.innerHTML = `${hours - 12} : ${minutes} : ${seconds}`


}

setInterval(setDate, 1000)