if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.location = "https://tonioluwole.github.io/mobiletoni.github.io/";
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Tech Enthusiast", "Developer","Writer", "Quick Learner", "Problem Solver"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay );
});

/*
const carouselText = [

    {text: }
  ]
  
  $(document).ready(async function() {
    carousel(carouselText, "#feature")
  });
  
  async function typeSentence(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(50);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1000);
        await deleteSentence(eleRef);
        await waitForMs(200);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }*/
