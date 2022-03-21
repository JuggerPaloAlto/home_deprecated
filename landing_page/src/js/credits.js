var header = document.getElementById("header");
var footer = document.getElementById("footer");
var close_credits = document.getElementById("close-credits");
var open_credits = document.getElementById("open-credits");
var credits = document.getElementById("credits");

function fadeIn(elem, duration=15) {
    var opacity = 0;
    elem.style.opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 1/duration
            elem.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
            elem.style.display="block";
        }
    }, duration);
}

function fadeOut(elem, duration=15) {
    var opacity = 1;
    elem.style.opacity = 1;
    var intervalID = setInterval(function() {
        if (opacity > 0) {
            opacity = opacity - 1/duration
            elem.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
            elem.style.display="none";
        }
    }, duration);
}

function hide_credits() {
    fadeIn(header);
    fadeIn(footer);
    fadeIn(open_credits);
    fadeOut(credits);
}

function show_credits() {
    fadeOut(header);
    fadeOut(footer);
    fadeOut(open_credits);
    fadeIn(credits)
}

open_credits.onclick = show_credits;
close_credits.onclick = hide_credits;
