import { createlayoutKeyboard } from './startKeyboard.js';


const functionalKeys = [16];



initialize();
function initialize() {
  createlayoutKeyboard();

}


addEventListener("keydown", (event) => {
  document.getElementById(event.keyCode).parentNode.classList.add("click");
  if(document.activeElement.classList[0] !==  "textAreaField" && !functionalKeys.includes(event.keyCode)) {
    const textArea = document.getElementsByClassName("textAreaField")[0];
    textArea.value = textArea.value + event.key;
  }
  if(event.keyCode === 16) {
    document.getElementById("49").innerHTML = "!";
  }

});

addEventListener("keyup", (event) => {
  setTimeout(() => 
  {
    document.getElementById(event.keyCode).parentNode.classList.remove("click");
    if(event.keyCode === 16) {
      document.getElementById("49").innerHTML = "1";
    }
  }
  , 300)
  
});

