const VIDEO_BG_ID = "2ehcpD__pqI";
const VIDEO_BG_LINK = "https://www.youtube-nocookie.com/embed/" + 
    VIDEO_BG_ID + "?&loop=1&mute=1&autoplay=1&rel=0&playlist=" + VIDEO_BG_ID;
const bgvid_id = "bgvid";

if (navigator.onLine) {
    document.getElementById(bgvid_id).src = VIDEO_BG_LINK;
    document.getElementById(bgvid_id).style.backgroundImage = "";
} else {
document.getElementById(bgvid_id).style.backgroundImage = "img/bg0.JPG";
document.getElementById(bgvid_id).src = "";
}

function updateOnlineStatus() {
document.getElementById(bgvid_id).src = VIDEO_BG_LINK;
document.getElementById(bgvid_id).style.backgroundImage = "";
}

function updateOfflineStatus() {
document.getElementById(bgvid_id).style.backgroundImage = "url(img/bg0.JPG)";
document.getElementById(bgvid_id).src = "";
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOfflineStatus); 