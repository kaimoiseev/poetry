$(document).ready(function(){
	window.onscroll=function(){
		$(".upto").css("display","inline-block");
		if(window.pageYOffset<100){
			$(".upto").css("display","none");
		}
	};
	var numbers=$(".number");
	for(var i=0; i<numbers.length; i++){
		numbers[i].innerHTML=i+1;
	}
	var subcoll=$(".numbers");
	for(var i=0; i<subcoll.length; i++){
		var subc=document.getElementsByClassName("itemssubc")[i].children;
		var first=subc[0].children[0].childNodes[1].innerText;
		var last=subc[subc.length-1].children[0].childNodes[1].innerText;
		subcoll[i].innerHTML=first+"-"+last;
	}

	var murderer=false;

	$(".add").click(function(){
		$(".even").toggle("swing");
		if(murderer){
			document.getElementById("isfriend").src="../images/yourfriend.png";	
		} else{
			document.getElementById("isfriend").src="../images/myfriend.png";	
		}
		murderer=!murderer;
	})
})