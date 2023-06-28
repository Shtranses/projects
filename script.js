alert("this code does not work on mobile, check the other clicker, its called \"simple clicker [game]\":       https://code.sololearn.com/WbYkU1Mdq56Q/?ref=app           (the one from the link works on mobile, check it pls :)" )

// Initialize variables
let clickCount = 0;
let fasterClicksCost = 10;
let moreClicksCost = 50;
let autoClickerCost = 100;
let fasterClicksLevel = 1;
let moreClicksLevel = 1;
let autoClickerLevel = 0;
let autoClickerInterval;

// Set up clicker button
window.onload=() => {const clickerButton = document.getElementById('clicker');
}
document.onload=()=>{ clickerButton.addEventListener('click'), () => {
  const moreClicksPerClick = Math.pow(2,moreClicksLevel - 1);}
  clickCount += moreClicksPerClick;
  document.getElementById('click-count').innerText = clickCount;
};

// Set up upgrades
const fasterClicksButton = document.getElementById('faster-clicks');
document.onload = () => {fasterClicksButton.addEventListener('click'), () => {
  if (clickCount >= fasterClicksCost) {
clickCount -= fasterClicksCost;
document.getElementById('click-count').innerText = clickCount;
fasterClicksLevel++;
fasterClicksCost *= 2;
document.getElementById('faster-clicks-cost').innerText = fasterClicksCost;
clickerButton.style.transitionDuration = (1 / fasterClicksLevel) + 's';
}
}
};

const moreClicksButton = document.getElementById('more-clicks');
document.onload = () => {moreClicksButton.addEventListener('click'), () => {
if (clickCount >= moreClicksCost) {
clickCount -= moreClicksCost;
document.getElementById('click-count').innerText = clickCount;
moreClicksLevel++;
moreClicksCost *= 2;
document.getElementById('more-clicks-cost').innerText = moreClicksCost;
}
}
}
const autoClickerButton = document.getElementById('auto-clicker');
document.onload=() => {autoClickerButton.addEventListener('click'), () => {
if (clickCount >= autoClickerCost) {
clickCount -= autoClickerCost;
document.getElementById('click-count').innerText = clickCount;
autoClickerLevel++;
autoClickerCost *= 2;
document.getElementById('auto-clicker-cost').innerText = autoClickerCost;
if (autoClickerInterval) {
clearInterval(autoClickerInterval);
}
autoClickerInterval = setInterval(() => {
clickerButton.click();
}, 1000 / autoClickerLevel);
}
}
};
document.write("this doesnt work on mobile, if you want to try it on mobile, check this one: https://code.sololearn.com/WbYkU1Mdq56Q/?ref=app ..............................................................  or just go to the comments section and click on the link of the fixed code. thanks :)")