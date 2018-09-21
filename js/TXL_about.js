function AbuoutFn(){
    this.init();
}
AbuoutFn.prototype = {
    init:function(){
        this.bind();
    }
    ,
    bind:function(){
        $(".TXL_play").on("click",function(){
            console.log($(".TXL_play"));
            $(this).css("display","none");
            $(".TXL_sub>.TXL_img").css("display","none");
            $(".TXL_sub>.TXL_flash").css("display","block");
        })
    }
}
new AbuoutFn();