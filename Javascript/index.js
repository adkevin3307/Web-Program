var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(function() {
    $('.Click_to_Menu').on('click', function() {
        $(this).addClass('animated zoomOutDown').one(animationEnd, function() {
            window.location.href = './Menu.html';
            $(this).hide().removeClass('animated zoomOutDown');
        });
    });
});