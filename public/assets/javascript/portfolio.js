$(document).ready(function() {

	//height match test
	$(function() {
		$('.col-xs-6 col-xs-6').matchHeight();
	});

	//print / save as pdf function
	$("#printBtn").on("click", function() {
		window.print();
	});


}); // document.ready

