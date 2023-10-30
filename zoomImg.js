$(document).ready(function () {
    $("img").addClass("click-to-zoom");
    $("img").attr("draggable", "false");

    $('.click-to-zoom').click(function () {
        var image = $(this);
        if (image.hasClass('zoomed')) {
            image.removeClass('zoomed');
        } else {
            image.addClass('zoomed');
        }
    });
});


$(document).ready(function () {
    $('.click-to-zoom').click(function () {
        var image = $(this);
        if (image.hasClass('zoomed')) {
            image.removeClass('zoomed');
        } else {
            image.addClass('zoomed');
        }
    });
});
