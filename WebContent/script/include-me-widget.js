//this is a self executing js
(function(){
	
	document.addEventListener("DOMContentLoaded", function(event) { 
	   var elements = document.getElementsByClassName("side-container");
	   var TEMPLATE = '';
	   elements[0].innerHTML = '<object data="http://localhost:8000/embed.html"></object>';
	});
	
})();
