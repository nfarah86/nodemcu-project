$(document).ready(function() {
   $(".buttonClass").click(function(){
   		var buttonClicked = this.id;
   		alert(buttonClicked);
   		$.get("http://192.168.4.1:80/", {piezoBuzzer:buttonClicked});
	});
});