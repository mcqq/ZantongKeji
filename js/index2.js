$(".smallNav li").on("mouseenter",function(){
    var num = $(this).index();
    console.log(num);
    if(num == 0){
        change(1,1,"white");
    }else if(num == 1){
        change(2,1,"white");
    } else if (num == 2) {
        change(3,1,"white");
    }
});
$(".smallNav li").on("mouseleave", function () {
    var num = $(this).index();
    console.log(num);
    if (num == 0) {
        change1(1, 1, "");
    } else if (num == 1) {
        change1(2, 1, "");
    } else if (num == 2) {
        change1(3, 1, "");
    }
});
function change(num1,num2,color){
    $(".smallNav li:nth-child("+ num1 +") a:nth-child("+ num2+ ")").css({
        "background-color": color,
        "background-image": "url(image/hhx_p_icon"+num1+"_hover.png)"
    })
}
function change1(num1, num2, color) {
    $(".smallNav li:nth-child(" + num1 + ") a:nth-child(" + num2 + ")").css({
        "background-color": color,
        "background-image": "url(image/hhx_p_icon"+num1+".png)"
    })
}