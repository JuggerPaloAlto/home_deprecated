var light_mode_on = false;

function toggle_theme() {
    // $("body").toggleClass("light-theme");
    $(".sidenav").toggleClass("light-theme");
    $("a").toggleClass("light-theme");
    $(".collapse").toggleClass("light-theme");
    $(".parallax__layer--top .title").toggleClass("light-theme");
    light_mode_on = !light_mode_on;
    if (light_mode_on) {
        $(".theme-switch").text("Dark Mode");
    } else {
        $(".theme-switch").text("Light Mode");
    }
    
}