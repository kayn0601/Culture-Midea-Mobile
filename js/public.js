$(function(){
    // 合作伙伴传送带
    function tp(){
        $(".tp-box").animate({
            marginLeft:'-1.9rem'
        },300,function(){
            $(".tp-box").append($(".tp-box").children()[0])
            $(".tp-box").css("marginLeft",0)
        })
    }
    setInterval(tp,3000)
})