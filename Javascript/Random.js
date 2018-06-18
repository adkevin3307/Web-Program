$(function() {
    $('#random').attr('disabled', true);
    $('#enter').click(function() {
        $('#list').html('');
        $('#result').html('');
        if (isNaN($('#amount').val())) window.alert('Please input number');
        else {
            var s = '';
            for (var i = 0; i < parseInt($('#amount').val()); i++) {
                s += '<div>';
                s += '第' + (i + 1) + '人姓名: ';
                s += '<input id = "num' + i + '" type = "text" value = "Person' + (i + 1) + '">';
                s += '</div>';
            }
            $('#list').html(s);
            $('#random').attr('disabled', false);
        }
    });
    $('#random').click(function() {
        if (isNaN($('#amount').val())) window.alert('Please input number');
        else $('#result').html($('#num' + Math.floor(Math.random() * $('#amount').val())).val());
    });

    $('.to_another_page').first().click(function() {
        window.location.href = './Menu.html';
    });

    $('#toChoose').click(function() {
        window.location.href = './Choose.html';
    });
});