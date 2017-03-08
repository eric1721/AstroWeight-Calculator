$(document).ready(function() {

	var planets = [
		['Pluto', 0.06],
		['Neptune', 1.148],
		['Uranus', 0.917],
		['Saturn', 1.139],
		['Jupiter', 2.640],
		['Mars', 0.3895],
		['Moon', 0.1655],
		['Earth', 1],
		['Venus', 0.9032],
		['Mercury', 0.377],
		['Sun', 27.9]
	];

	// 1. Iterate over the above two-dimensional array and use jQuery to append a new <option> element as a child of the <select> element.


for (var i = planets.length -1; i >= 0; i--) {
      $("#planet").append('<option value=' + planets[i][1] + '>' + planets[i][0] + '</option>');
  }
  $("#calculate").click( function()
     {
       var weight = $('#weight-enter').val();
       var grav = $('select option:selected').val();
       var total = grav * weight;
       $('#output').html(total);
     }
);


})
