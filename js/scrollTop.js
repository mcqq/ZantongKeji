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
			$('<div id="topcontrol" title="返回顶部" style="position: fixed; z-index: 2147483647; bottom: 10px; right: 180px; opacity: 0; cursor: pointer;">'+
				'<img src="../image/TXL_nav_r_icon_gettop.png"/ style="width:45px; height:45px; border:0; z-index:99999999;">'+
			'</div>');
		$('body').append($backTop);
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