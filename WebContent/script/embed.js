(function(){
	
	document.addEventListener("DOMContentLoaded", function(event) { 
		showWidgets ();
		var availableCities = [
		                     "Chennai",
		                     "Calicut",
		                     "Mumbai",
		                     "Delhi"		                     
		                   ];
		$( "#tags" ).autocomplete({
		      source: availableCities,
		      select : function (e, ui) {
		    	  
		    	  loadSearch (ui.item.value);
		      }
		    });
	});
	
	var showWidgets = function (id) {
		$('#panel-stack').children().each(function () {
			$(this).hide();
		});
		if (id == undefined) {
			$("#search-widget").show();
		}
	}
	
	var loadSearch = function (query) {
		console.log (query);
	}
})();