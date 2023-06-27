
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.location = "https://tonioluwole.github.io/mobiletoni.github.io/";
}

const text = "Hello, I'm a JavaScript Developer."; // The text to display in the typing effect
const typingSpeed = 100; // The speed of typing (in milliseconds)
const delayAfterTyping = 1000; // The delay after the text is fully typed (in milliseconds)

const typingElement = document.querySelector(".typing-effect");

let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            typeText();
        }, delayAfterTyping);
    }
}

typeText();