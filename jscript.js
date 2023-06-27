
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.location = "https://tonioluwole.github.io/mobiletoni.github.io/";
}

// List of sentences
var _CONTENT = [
    "Designer",
    "Programmer",
    "Writer",
    "Forever Learner",
    "Problem Solver"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#poppinsmain");

// Starts typing effect
function Type() { 
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 40);
        }, 900);
    }
}

// Starts deleting effect
function Delete() {
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if(text === '') {
        clearInterval(_INTERVAL_VAL);

        // If last sentence then display the first one, else move to the next
        if(_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});