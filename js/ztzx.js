$(function () {
    function Ztzx() {
        this.init();
    }
    Ztzx.prototype = {
        constructor: Ztzx,
        init: function () {
            this.banner();
            this.json();
            this.bindEvent();
            this.back();
            this.nav();
        },
        banner: function () {
            // 广告图的高
            $(".banner").height($(window).height());
        },
        json: function () {
            // function(){
            //     console.log(json.data)
            let template = $("#template").html();
            jso = typeof jso == "object" ? jso : eval("(" + jso + ")");
            let arry = jso.data;
            for (let i = 0; i < 4; i++) {
                let idx = suijishu(arry.length - 1, 0);
                let str = chuliFn(template, arry[idx])
                $(".main_list ul").append(str);
            }
            // }
            function chuliFn(template, data) {
                return template.replace(/\@([\w]+)\@/g, function (match, $1) {
                    return data[$1];
                })
            }

            function suijishu(max, min) {
                return parseInt(Math.random() * (max - min) + min);
            }
        },
        bindEvent: function () {
            let self = this;
            $(".moreTotal").on("click", function () {
                self.json();
            })
        },
        back: function () {
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                if (top > 0) {
                    $(".back").fadeIn();
                } else {
                    $(".back").fadeOut();
                }
            });
            $(".back").on("click", function () {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
            })
        }
    }
    new Ztzx();
})