$(document).ready(function () {

    $(".toggle-mnu").click(function () {
        $(this).toggleClass("on");
        $(".main-menu").slideToggle();
        return false;
    });

    $(".main-section .mainsect-content .info-block").equalHeights();
    $(".main-section .mainsect-bot-content .info-block").equalHeights();

});