var name = ".header";
var menuYloc = null;

$(document).ready(function () {
    menuYloc = $(name).scrollTop();
    $(window).scroll(function (){
        var menuHead = $(window).scrollTop();
        if (menuHead > menuYloc) {
            $(name).addClass("floatheader");
            $(".login").addClass("shiftlogin");
        }
        else {
            $(name).removeClass("floatheader");
            $(".login").removeClass("shiftlogin");
        }
    });
    $(window).resize(function (){
        var $screenheight = $(window).height(); 
        $("#videoElem").height($screenheight - 120);
    });
    
    $("#lklogin").click(function (e){
        e.preventDefault();
        $("#divlog").slideToggle(800);
    });
    $("#lkSearch").click(function (e){
        e.preventDefault();
        $("#lkSearch").fadeOut("fast",function () {
            $("#inpSearch").fadeIn(400,"linear");
        });
        
    });
    
});