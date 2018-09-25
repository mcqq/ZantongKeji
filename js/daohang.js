$("header li").on("mouseover", function () {
    // alert(55);
    $(this).children("a").css("border-bottom", "2px solid #00a6b1")
    $(this).find(".sub_box").fadeIn();
    $("header").css("border-bottom", "1px solid #00a6b1");
})
$("header li").on("mouseleave", function () {
    $(this).children("a").css("border-bottom", "none");
    $(this).find(".sub_box").fadeOut();
    $("header").css("border-bottom", "none");
})
