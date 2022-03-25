var header = document.getElementById("header");
var footer = document.getElementById("footer");
var close_credits = document.getElementById("close-credits");
var open_credits = document.getElementById("open-credits");
var credits = document.getElementById("credits");

function fadeIn(elem, duration=15) {
    elem.style.display="block";
    var opacity = 0;
    elem.style.opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 1/duration
            elem.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, duration);
}

function fadeOut(elem, duration=15) {
    elem.style.display="block";
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
 

function* show_intro_message() {
    fadeIn(header, 35);
    yield;
    fadeIn(document.getElementById("summary1"), 40);
    yield;
    fadeIn(document.getElementById("summary2"), 40);
    yield;
    fadeIn(footer, 35);
    document.removeEventListener("click", intro_iter_next);
    return;
}

function* timed_intro() {
    do_starting_anim(7000);
    yield;
    do_starting_anim(9000);
    yield;
    do_starting_anim(8000);
    yield;
    do_starting_anim(1000);
    return;
}

const intro_iter = show_intro_message();
const intro_timed_iter = timed_intro();

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }

 async function do_starting_anim(delay) {  
    await sleep(delay);  
    intro_iter.next();
    intro_timed_iter.next()
 }

intro_timed_iter.next();

function intro_iter_next() {
    intro_iter.next();
}

document.addEventListener('click', intro_iter_next);