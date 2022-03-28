const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");

function handleNav() {
    if (main.onclick==null) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
    sidenav.style.left = "0";
    setTimeout(() => main.onclick=closeNav, 100);
}

function closeNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    sidenav.style.left = "-250px";
    main.onclick=null;
}