// JavaScript Document

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
	$('#box')
})

/*
$('#button7').on("click", function() {
	$('#box').animate({width: 150, height: 150}, 1000).css("background-color", "orange").css("opacity", 1.0);
})
*/

$('#button7').on("click", function() {
	$('#box').removeAttr('style');
})
