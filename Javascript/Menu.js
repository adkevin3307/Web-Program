var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(function() {
    $('nav').mouseenter(function() {
        $('#total_select').css('height', '280px').hover(
            function() {
                $('.modify_ul').fadeIn(500);
            },
            function() {
                $('.modify_ul').fadeOut(300);
                $(this).css('height', '50px');
            }
        );
    });

    $('nav ul li').hover(
        function() {
            $(this).css('background-color', 'white');
        },
        function() {
            $(this).css('background-color', 'rgb(145, 145, 145)');
        }
    );

    $('li').click(generateMenu);

    $('.to_another_page').first().click(function() {
        localStorage.setItem('menu', $('.header').html());
        window.location.href = './Choose.html';
    });

    $('#toRandom').click(function() {
        window.location.href = './Random.html';
    });

    function changeInformation(self, next) {
        $(self).on('click', function() {
            $(this).addClass('animated fadeOutLeft').one(animationEnd, function() {
                $(this).hide().removeClass('animated fadeOutLeft');
                $(next).show().addClass('animated fadeInRight').one(animationEnd, function() {
                    $(this).removeClass('animated fadeInRight');
                });
            });
        });
    }

    changeInformation('#menu', '#introduce');
    changeInformation('#introduce', '#menu');
});

function generateMenu(e) {
    console.log(e.target.id);
    $('.header').html(e.target.innerHTML);
    $('#menu').show();
    $('#introduce').hide();
    $.getJSON('./Json' + e.target.id + '.json', function(data) {
        $("#menu").html("");
        var content = "<tr><th>菜名</th><th>價錢</th><th>菜名</th><th>價錢</th></tr>";
        for (var index = 0; index < data.length - 1; index += 2) {
            content += 
                "<tr>" + 
                "<td>" + data[index].dish + "</td>" + 
                "<td style = 'background-color: powderblue'>" + data[index].amount + "</td>" + 
                "<td>" + data[index + 1].dish + "</td>" + 
                "<td style = 'background-color: powderblue'>" + data[index + 1].amount + "</td>" + 
                "</tr>";
        }
        content += '<tr style = "height: 20px;"></tr>';
        $("#menu").html(content);
    });
}