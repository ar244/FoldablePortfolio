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

	// oriDomi element for the landing page
	var oriDomi = new OriDomi(".foldedText", {
	    vPanels: 5,
	    speed: 1500,
	    ripple: true,
	    touchEndCallback: function() {
	        console.log('touch ended');
		}
	});
	oriDomi.accordion(40);



	$(".foldedText").on("mouseover", function() {
		var num = Math.floor(Math.random() * 40 + 30);
		console.log(num);
    	oriDomi.accordion(num);
    });

}); // document.ready

