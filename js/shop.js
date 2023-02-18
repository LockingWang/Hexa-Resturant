$(document).ready(function () {
    $('.mobile-menuBTN').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.navbar').toggleClass('show');
    });
    $('.heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('red_heart');
    });
});