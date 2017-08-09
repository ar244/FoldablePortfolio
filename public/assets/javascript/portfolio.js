$(document).ready(function() {

	//height match test
	$(function() {
		$('.col-xs-6 col-xs-6').matchHeight();
	});

	//print / save as pdf function
	$("#printBtn").on("click", function() {
		window.print();
	});

	// function to convert user name to all caps, and to get the color code
	// var fName;
	// var lName;
	// var backgroundColor;
	// $("#add").on("click", function() {
	// 	fName = $("#firstName").val().trim().toUpperCase();
	// 	lName = $("#lastName").val().trim().toUpperCase();
	// 	backgroundColor = "#" + ($("#bgColor").val().trim());
	// 	console.log(fName);
	// 	console.log(lName);
	// 	console.log(backgroundColor);
	// 	return true;
	// 	changeColor();
	// });

}); // document.ready

