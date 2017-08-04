$(document).ready(function() {

	$("#pdf").on('click', function() {

		var doc = new jsPDF();

		var specialElementHandlers = {
			'#editor': function(element, renderer){
				return true;
			}
		};

		doc.fromHTML($('.container').get(0), 15, 15, {
			'width': 170, 
			'elementHandlers': specialElementHandlers
		});
		doc.save("myfoldableportfolio");
		doc.output('dataurlnewwindow'); 
	});

});