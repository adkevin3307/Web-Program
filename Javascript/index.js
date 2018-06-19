var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(function() {
    $(document).on('click', function(e) {
        if (e.target.tagName.toLowerCase() == 'a') return;
        $('.header').addClass('animated zoomOutDown').one(animationEnd, function() {
            $(this).hide().removeClass('animated zoomOutDown');
        });
        $('.Click_to_Menu').addClass('animated zoomOutUp').one(animationEnd, function() {
            $(this).hide().removeClass('animated zoomOutUp');
            window.location.href = './Menu.html';
        });
    });
    $('a').click(function() {
        document.getElementById('sound').play();
    });
});