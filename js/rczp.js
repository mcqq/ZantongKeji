var div = $("#search");
function runIt()
{
    div.show("slow");
    div.animate({left:'+=300'},1000);
    div.animate({left:'-=300'},1000,function () {
        $("#search").addClass("one")
    });
}
runIt();