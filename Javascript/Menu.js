var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var jsonPath = {
    "海大燒臘": "vpfcy",
    "金園": "ooif6",
    "818": "1e809u",
    "八方雲集": "x0epu",
    "豚將": "xlubm",
    "三媽": "s8xvm",
    "佬地方牛排": "1apdmq",
    "佳汶麵食館": "nhh1e",
    "牛餃鏖鋒": "o51sy",
    "陳家麵店": "cttb6",
    "晶彩": "17scrm",
    "寶妹": "18dsde",
    "阿水飯麵館": "13mbj6",
    "家薌牛肉麵": "1a636q",
    "涵館": "14t6qq",
    "港式燒臘便當": "uxe3m"
}

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

    $('#comment').click(function() {
        window.alert('Not finish yet');
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
    $('.header').html(e.target.innerHTML);
    $('#menu').show();
    $('#introduce').hide();
    $.getJSON('https://api.myjson.com/bins/' + jsonPath[e.target.id], function(data) {
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