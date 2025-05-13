const counterDisplay = document.getElementById("counter-display");

const resetButton = document.getElementById("button-clicker-reset-btn");
const increaseButton = document.getElementById("increase-btn");

let count = 0;
let achiement;

increaseButton.onclick = function(){
  count++
  counterDisplay.textContent = count;

  if(count == 1){document.getElementById("achievement").textContent = `Babies first click!`;}
}

resetButton.onclick = function(){
  count = 0;
  counterDisplay.textContent = count;
}