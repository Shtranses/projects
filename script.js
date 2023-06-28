const showAlert = (message) => {
    const alertOverlay = document.createElement('div');
    alertOverlay.classList.add('alert-overlay');
  
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = message;
  
    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
  
    setTimeout(() => {
      alertOverlay.remove();
    }, 2000);
  };
  
  showAlert('Щоб пройти гру вам потрібно все вкачати до 10 рівня');
let clickCount = 0;
let fasterClicksCost = 10;
let moreClicksCost = 50;
let autoClickerCost = 100;
let fasterClicksLevel = 1;
let moreClicksLevel = 1;
let autoClickerLevel = 0;
let autoClickerInterval;

const clickerButton = document.getElementById('clicker');
const clickCountElement = document.getElementById('click-count');

clickerButton.addEventListener('click', () => {
  const moreClicksPerClick = Math.pow(2, moreClicksLevel - 1);
  clickCount += moreClicksPerClick;
  clickCountElement.textContent = clickCount;

  checkGameEnd();
});

const fasterClicksButton = document.getElementById('faster-clicks');
const fasterClicksLevelElement = document.getElementById('faster-clicks-level');

fasterClicksButton.addEventListener('click', () => {
  if (clickCount >= fasterClicksCost) {
    clickCount -= fasterClicksCost;
    clickCountElement.textContent = clickCount;
    fasterClicksLevel++;
    fasterClicksCost *= 2;
    document.getElementById('faster-clicks-cost').textContent = fasterClicksCost;
    clickerButton.style.transitionDuration = (1 / fasterClicksLevel) + 's';
    fasterClicksLevelElement.textContent = `(Level ${fasterClicksLevel})`;

    checkGameEnd();
  }
});

const moreClicksButton = document.getElementById('more-clicks');
const moreClicksLevelElement = document.getElementById('more-clicks-level');

moreClicksButton.addEventListener('click', () => {
  if (clickCount >= moreClicksCost) {
    clickCount -= moreClicksCost;
    clickCountElement.textContent = clickCount;
    moreClicksLevel++;
    moreClicksCost *= 2;
    document.getElementById('more-clicks-cost').textContent = moreClicksCost;
    moreClicksLevelElement.textContent = `(Level ${moreClicksLevel})`;

    checkGameEnd();
  }
});

const autoClickerButton = document.getElementById('auto-clicker');
const autoClickerLevelElement = document.getElementById('auto-clicker-level');

autoClickerButton.addEventListener('click', () => {
  if (clickCount >= autoClickerCost) {
    clickCount -= autoClickerCost;
    clickCountElement.textContent = clickCount;
    autoClickerLevel++;
    autoClickerCost *= 2;
    document.getElementById('auto-clicker-cost').textContent = autoClickerCost;
    if (autoClickerInterval) {
      clearInterval(autoClickerInterval);
    }
    autoClickerInterval = setInterval(() => {
      clickerButton.click();
    }, 1000 / autoClickerLevel);
    autoClickerLevelElement.textContent = `(Level ${autoClickerLevel})`;

    checkGameEnd();
  }
});

function checkGameEnd() {
    if (
      fasterClicksLevel >= 10 &&
      moreClicksLevel >= 10 &&
      autoClickerLevel >= 10
    ) {
      gameComplete(); // Call the gameComplete function instead of alert
      resetGame();
    }
  }

function resetGame() {
  clickCount = 0;
  fasterClicksCost = 10;
  moreClicksCost = 50;
  autoClickerCost = 100;
  fasterClicksLevel = 1;
  moreClicksLevel = 1;
  autoClickerLevel = 0;
  clearInterval(autoClickerInterval);

  clickCountElement.textContent = clickCount;
  document.getElementById('faster-clicks-cost').textContent = fasterClicksCost;
  document.getElementById('more-clicks-cost').textContent = moreClicksCost;
  document.getElementById('auto-clicker-cost').textContent = autoClickerCost;
  fasterClicksLevelElement.textContent = `(Level ${fasterClicksLevel})`;
  moreClicksLevelElement.textContent = `(Level ${moreClicksLevel})`;
  autoClickerLevelElement.textContent = `(Level ${autoClickerLevel})`;
}

const colorPickerButton = document.getElementById('color-picker-button');
const colorPicker = document.getElementById('color-picker');

colorPickerButton.addEventListener('click', () => {
  const color = colorPicker.value;
  document.body.style.backgroundColor = color;
});


const showPopup = (message) => {
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('alert-overlay');
  
    const popupBox = document.createElement('div');
    popupBox.classList.add('alert-box');
    popupBox.textContent = message;
  
    popupOverlay.appendChild(popupBox);
    document.body.appendChild(popupOverlay);
  };
  
  const gameComplete = () => {
    showPopup('Ви пройшли гру!');
  
    // Reset the game or perform other actions
  };
  
  resetGame();