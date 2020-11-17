const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  timerId = setInterval(
    changesBgColorOfBody,
    1000,
    colors,
    randomIntegerFromInterval,
  );
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changesBgColorOfBody = (colors, callback) => {
  const randomValueFromColors = colors[callback(0, colors.length - 1)];
  document.body.style.backgroundColor = randomValueFromColors;
};
