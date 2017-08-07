$(document).ready(function() {

	$("#printBtn").on('click', function() {
		window.print();
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

