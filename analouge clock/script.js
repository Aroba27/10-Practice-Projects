setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand]');
const secHand = document.querySelector('[data-sec-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutessRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutessRatio + currentDate.getHours()) / 12;
  
    setRotation(secHand, secondsRatio);
    setRotation(minHand, minutessRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()