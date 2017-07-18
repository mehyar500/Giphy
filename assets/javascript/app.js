$(document).ready(function(){
	// create an array of elements in this case animals
	var animal = ["dog", "cat", "panda"];
	//display buttons
	// Function that displays all buttons of the array
	function renderButtons(){
		// $("#animalButtons").empty();
		//loop through the array to render buttons
		//check movie-button-layout-solved.html
		for (var i =0; i < animal.length; i++){
			// create a var to create a button
			var btn = $("<button>");
			//change the the newly created button attribute
			btn.addClass("action");
			btn.attr("data-name", animal[i]);
			btn.addClass("btn btn-default");
			btn.text(animal[i]);
			$("#animalButtons").append(btn);
			console.log(animal);
		};
		console.log(animal);
	};
	renderButtons();
	console.log(animal);

	// Function to add a new button
	function addNewButton(){
		$("#addAnimal").on("click", function(){
			// event.preventDefault();
			var addAnimal = $("#animalInput").val().trim();
			animal.push(addAnimal);
			renderButtons();
			console.log(animal);
		});
	};
	console.log(animal);
	// Function that displays all of the gifs
	function displayGifs(){
		var animalDisplay = $(this).attr("data-name");
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalDisplay + "&api_key=5c85886a63464a1bbdca4e06adc0e445&limit=10";
    	console.log(queryURL);
   		$.ajax({
        url: queryURL,
        method: 'GET'
    	}).done(function(response) {
        console.log(response);

    	};

	};

	

});