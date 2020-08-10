$(function(){
    var shopflag=1
    $(".shop").click(function(){
        if(shopflag==1){
            $(".shopContent").css("display","none");
            $(".shop").css("border-top","none")
            $(".shop-button").text("∨")
            shopflag=0
        }else{
            $(".shopContent").css("display","block");
            $(".shop").css("border-top","3px solid rgba(30, 80, 174, 1)")
            $(".shop-button").text("∧")
            $(".purchContent").css("display","none");
            $(".purch").css("border-top","none")
            $(".purch-button").text("∨")
            $(".cuscContent").css("display","none");
            $(".cusc").css("border-top","none")
            $(".cusc-button").text("∨")
            shopflag=1
        }       
    })


    var purchflag=0
    $(".purch").click(function(){
        if(purchflag==1){
            $(".purchContent").css("display","none");
            $(".purch").css("border-top","none")
            $(".purch-button").text("∨")
            purchflag=0
        }else{
            $(".purchContent").css("display","block");
            $(".purch").css("border-top","3px solid rgba(30, 80, 174, 1)")
            $(".purch-button").text("∧")
            $(".shopContent").css("display","none");
            $(".shop").css("border-top","none")
            $(".shop-button").text("∨")
            $(".cuscContent").css("display","none");
            $(".cusc").css("border-top","none")
            $(".cusc-button").text("∨")
            purchflag=1
        }
    })


    var cuscflag=0
    $(".cusc").click(function(){
        if(cuscflag==1){
            $(".cuscContent").css("display","none");
            $(".cusc").css("border-top","none")
            $(".cusc-button").text("∨")
            cuscflag=0
        }else{
            $(".cuscContent").css("display","block");
            $(".cusc").css("border-top","3px solid rgba(30, 80, 174, 1)")
            $(".cusc-button").text("∧")
            $(".shopContent").css("display","none");
            $(".shop").css("border-top","none")
            $(".shop-button").text("∨")
            $(".purchContent").css("display","none");
            $(".purch").css("border-top","none")
            $(".purch-button").text("∨")
            cuscflag=1
        }
    })
})