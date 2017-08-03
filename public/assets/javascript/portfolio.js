$(document).ready(function() {

	var doc = new jsPDF({
	  orientation: 'landscape',
	})

	$("#pdf").on('click', function() {
		console.log("here");
		console.log(window.location.pathname);
		doc.text('Hello world!', 1, 1)
		doc.save('names.pdf')
	});
}