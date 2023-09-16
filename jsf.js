$(".home").click(function() {
    $('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 1300);
    });
$(".aboutmee").click(function() {
    $('html, body').animate({
        scrollTop: $(".secondMain").offset().top
    }, 1300);

});
$(".resumee").click(function() {
    $('html, body').animate({
        scrollTop: $(".thirdMain").offset().top
    }, 1300);
});
$(".contactt").click(function() {
    $('html, body').animate({
        scrollTop: $(".fourthMain").offset().top
    }, 1300);
});


