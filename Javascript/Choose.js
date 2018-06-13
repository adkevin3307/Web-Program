var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(function() {
    $('.header').fadeIn(2500);
    var sum = 0;
    if (localStorage.getItem('menu') != '吃飯的地方' && localStorage.getItem('menu') != null) generateMenu();
    $('#menu').click(function(e) {
        if (e.target.id.startsWith('dish')) {
            $('#choosed').show();
            var s = 
                '<tr class = "animated fadeInRight">' + 
                '<td>' + e.target.innerHTML + '</td>' + 
                '<td style = "background-color: powderblue">' + $('#amount' + e.target.id.substr(4)).html() + '</td>' + 
                '</tr>';
            $(s).insertBefore('#total');
            var past = sum;
            sum += parseInt($('#amount' + e.target.id.substr(4)).html());
            $('#total').html('<td style = "font-weight: bold;">總價</td><td style = "font-weight: bold;">' + sum + '</td>');
            if (past == 0) {
                $('#total').addClass('animated fadeInRight').one(animationEnd, function() {
                    $(this).removeClass('animated fadeInRight');
                });
            }
        }
    });
});

function generateMenu() {
    $('#menu').show().addClass('animated fadeInLeft').one(animationEnd, function() {
        $('#menu').removeClass('animated fadeInLeft');
    });
    $('#menu').show();
    $.getJSON('./Json/' + localStorage.getItem('menu'), function(data) {
        $("#menu").html("");
        var content = '<caption style = "font-size: 30px; font-weight: bold;">' + localStorage.getItem('menu') + '</caption>';
        content += "<tr><th>菜名</th><th>價錢</th><th>菜名</th><th>價錢</th></tr>";
        for (var index = 0; index < data.length - 1; index += 2) {
            content += 
                "<tr>" + 
                "<td id = 'dish" + index + "'>" + data[index].dish + "</td>" + 
                "<td style = 'background-color: powderblue' id = 'amount" + index + "'>" + data[index].amount + "</td>" + 
                "<td id = 'dish" + (index + 1) + "'>" + data[index + 1].dish + "</td>" + 
                "<td style = 'background-color: powderblue' id = 'amount" + (index + 1) + "'>" + data[index + 1].amount + "</td>" + 
                "</tr>";
        }
        content += '<tr style = "height: 20px;"></tr>';
        $("#menu").html(content);
    });
}