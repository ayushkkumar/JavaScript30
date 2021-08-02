const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    secondHand.style.transform = `rotate(${((seconds/60)*360)+90}deg)`;

    const minutes = now.getMinutes();
    minHand.style.transform = `rotate(${((minutes/60)*360)+90}deg)`;

    const hours = now.getHours();
    hourHand.style.transform = `rotate(${((hours/12)*360)+90}deg)`;
}

setInterval(setDate, 1000);