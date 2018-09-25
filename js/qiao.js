$box = $("#box");
var $points = $('.points li');
var idx = 0;
var $page = $('.page');
var $h = $(window).height();
var timer = null;
$page.eq(0).addClass('moving');
$(window).mousewheel(function (ev, dat) {

    clearTimeout(timer);

    timer = setTimeout(function () {

        if (dat == -1) {
            idx++;
        } else {
            idx--;
        }

        if (idx < 0) {
            idx = 0;
        }

        if (idx > 8) {
            idx = 8;
        }

        $('.box').animate({
            top: -idx * $h
        }, 300);

        $page.eq(idx).addClass('moving').siblings().removeClass('moving');
        $points.eq(idx).addClass('active').siblings().removeClass('active');

    }, 200)

})
$points.click(function (event) {
    idx = $(this).index();
    $('.box').animate({
        top: -idx * $h
    }, 300);
    $page.eq(idx).addClass('moving').siblings().removeClass('moving');
    $points.eq(idx).addClass('active').siblings().removeClass('active');

});