const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");
const sidenav_close = document.getElementById("close-sidenav");

function handleNav() {
    if (main.onclick == null) {
        openNav();
    } else {
        closeNav();
    }
    $('.arrow').toggleClass('active');
    $('.arrow-helper').toggleClass('active');
}

function openNav() {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
    sidenav.style.left = "0";
    sidenav_close.style.left = "262px";
    setTimeout(() => main.onclick=() => {}, 100);
}

function closeNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    sidenav.style.left = "-250px";
    sidenav_close.style.left = "0";
    main.onclick=null;
}

main.onclick == null;
handleNav();