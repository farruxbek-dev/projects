import {defenders, goalkeepers} from "./data/players.js";

let maxed = '';
let goalkeepersHTML  ='';
let defendersHTML = '';
let upgradedPer = 0;
let playersUpgradedPer = [];
let positionPar = '';
let currentPositioning = 'goalkeepers';

goalkeepersHTML = `<p class="position-par">GOALKEEPERS</p>`;
defendersHTML = `<p class="position-par">DEFENDERS</p>`;
goalkeepers.forEach((player) => {
  if (player.isMaxed) {
    maxed = '-maxed';
  } else {
    maxed = '';
  }
  function calculatePercentage() {
    upgradedPer = (player.overall - player.oldOverall) * 10;
    if (upgradedPer < 0) {
      upgradedPer = 0;
    } else if (upgradedPer > 100) {
      upgradedPer = 100;
    }
  }

  calculatePercentage();
  goalkeepersHTML += `

  <a href="" class="players-links">
  <div class="player-card">
    <img class="card-image" src="images/cards/DLS24_gold_card_v1${maxed}.png">
    <div class="card-position">${player.position.toLocaleUpperCase()}</div>
    <img class="card-country" src="images/flags/${player.co2dig}.svg">
    <p class="player-name">${player.lastName.toUpperCase()}</p>
    <img src="images/players-photo/${player.image}" class="player-image">
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="number">${player.overall}</div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="88px" height="88px">
        <defs>
          <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#25F925" />
              <stop offset="100%" stop-color="#22F5F6" />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="27" />
      </svg>
    </div>
  </div>
  </a>
`
playersUpgradedPer.push(upgradedPer);
});

defenders.forEach((player) => {
  if (player.isMaxed) {
    maxed = '-maxed';
  } else {
    maxed = '';
  }
  function calculatePercentage() {
    upgradedPer = (player.overall - player.oldOverall) * 10;
    if (upgradedPer < 0) {
      upgradedPer = 0;
    } else if (upgradedPer > 100) {
      upgradedPer = 100;
    }
  }

  calculatePercentage();
  defendersHTML += `

  <a href="">
  <div class="player-card">
    <img class="card-image" src="images/cards/DLS24_gold_card_v1${maxed}.png">
    <div class="card-position">${player.position.toLocaleUpperCase()}</div>
    <img class="card-country" src="images/flags/${player.co2dig}.svg">
    <p class="player-name">${player.lastName.toUpperCase()}</p>
    <img src="images/players-photo/${player.image}" class="player-image">
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="number">${player.overall}</div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="88px" height="88px">
        <defs>
          <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#25F925" />
              <stop offset="100%" stop-color="#22F5F6" />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="27" />
      </svg>
    </div>
  </div>
  </a>
`
playersUpgradedPer.push(upgradedPer);
});

document.querySelector('.goalkeepers-grid').innerHTML = goalkeepersHTML;
document.querySelector('.defenders-grid').innerHTML = defendersHTML;
console.log(playersUpgradedPer);

const bars = document.querySelectorAll('.inner');
bars.forEach((bar) => {
  const number = parseInt(bar.textContent, 10);

  if (number < 60) {
    bar.classList.add('red');
  } else if (number >= 60 && number < 70) {
    bar.classList.add('brown');
  } else if (number >= 70 && number < 80) {
    bar.classList.add('yellow');
  } else if (number >= 80 && number < 90) {
    bar.classList.add('green');
  } else {
    bar.classList.add('blue');
  }
});

const circle = document.querySelectorAll('circle');
let i = 0;
circle.forEach((offset) => {
  offset.classList.add(`offset${playersUpgradedPer[i]}`);
  i++;
});

const positions = document.querySelectorAll('.card-position');
positions.forEach((pos) => {
  const position = pos.innerHTML;

  if (position === 'GK') {
    pos.classList.add('blue-pos');
  } else if (position === 'LB' || position === 'CB' || position === 'RB') {
    pos.classList.add('green-pos');
  } else if (position === 'DM' || position === 'CM' || position === 'LM' || position === 'RM' || position === 'AM' || position === 'LWB' || position === 'RWB') {
    pos.classList.add('yellow-pos');
  } else if (position === 'LW' || position === 'RW' || position === 'CF' || position === 'SS') {
    pos.classList.add('red-pos');
  }
});