$(document).ready(function () {

    $(".toggle-mnu").click(function () {
        $(this).toggleClass("on");
        $(".main-menu").slideToggle();
        return false;
    });

    $(".evaluation .eval-content .info-block").equalHeights();
    $(".evaluation .eval-bot-content .info-block").equalHeights();
    $(".accounting .acc-content .info-block").equalHeights();

    // $(".advantages").waypoint(function () {
    //     $(".advantages").removeClass("card-off").addClass("card-off");
    // });
});