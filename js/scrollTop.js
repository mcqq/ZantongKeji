//返回顶部
function chinaz(){
	this.init();
}
chinaz.prototype = {
	constructor: chinaz,
	init: function(){		
		this.createE();
	},	
	createE: function(){
		var $backTop = this.$backTop = 
			$('<b class="back"></b>'+
				'<p>返回顶部</p>');
		$('.aside li').eq(2).append($backTop);
		$backTop.click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 1200);
		});

		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("opacity", "1") : $backTop.css("opacity", "0");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
	
}
var chinaz = new chinaz();