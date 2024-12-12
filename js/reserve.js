// booking js
const dateRes = document.querySelector('#res-date');
const timeRes = document.querySelector('#res-time');

const date = new Date();
const [textDate, textTime] = date.toISOString().split('T')
console.log()
dateRes.value = textDate;
timeRes.value = textTime.slice(0, 5)