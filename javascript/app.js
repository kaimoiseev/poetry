$(document).ready(function(){
	$("a").mouseover(function(){
		$(".page").css("width", "10%");
		$(".page").css("padding-bottom","10%");
	});
	$("a").mouseout(function(){
		$(".page").css("width", "0");
		$(".page").css("padding-bottom","0");
	});
})