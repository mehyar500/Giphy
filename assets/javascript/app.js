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

	};

	

});