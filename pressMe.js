$(document).ready(function() {
   $(".buttonClass").click(function(){
   		var buttonClicked = this.id;
   		alert(buttonClicked);
   		$.get("http://192.168.1.122:80/", {piezoBuzzer:buttonClicked});
   		//above is the ip address of the server I'm trying to hit
	});
});