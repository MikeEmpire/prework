// JavaScript Document

function AnimateRotate(d){
    var elem = $("#box");

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

$('#button1').on("click", function() {
	$('#box').animate({width: 200, height: 200}, 1000);
})

$('#button2').on("click", function() {
	$('#box').css("background-color", "blue");
})

$('#button3').on("click", function() {
	$('#box').fadeTo("slow", 0.15);
})

$('#button4').on("click", function() {
	$('#box').animate({marginLeft: 200}
	, 1000)
})

 $('#button5').on("click", function() {
    AnimateRotate(360);
})

$('#button6').on("click", function() {
	$('#box').effect("shake", {times:5}, 1000);
})

$('#button7').on("click", function() {
	$('#box').animate({width: 150, height: 150}, 1000).css("background-color", "orange").css("opacity", 1.0).animate({marginLeft: 0}, 1000);
})

