$(function(){
    //导航
    var dhflag="false"
    $(".dh").tap(function(){
        if(dhflag=="false"){
            $(".head-nav").css("display","block")
            $(".head-nav").animate({
                opacity:1
            },300)
            dhflag="true"
        }else{
            $(".head-nav").animate({
                opacity:0
            },300,function(){
                $(".head-nav").css("display","none")
            })
            dhflag="false"
        }
    })

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