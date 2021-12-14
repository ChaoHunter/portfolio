$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','hsla(229, 34%, 25%, 0.7)');
    } else {
    $('.navbar').css('background','transparent');
    }
    });