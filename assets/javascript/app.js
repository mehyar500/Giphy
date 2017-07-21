$(document).ready(function(){
// create an array of elements in this case animals
	var animal = ["dog", "cat", "panda"];
	//display buttons
	// Function that displays all buttons of the array
	function renderButtons(){
		$("#animalButtons").empty();
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
	};

	renderButtons();

	console.log(animal);

	$("#animalForm").on("submit", function(event){
		event.preventDefault();
		var addAnimal = $("#animalInput").val().trim();
		animal.push(addAnimal);
		renderButtons();
		console.log(animal);
		return false;
	});

	// console.log(animal);
	// // Function that displays all of the gifs
	// function displayGifs(){
	$(".btn").click(function(){
		//just to check if the button is working
		var a = $(this).attr("data-name");
		console.log("the btn "+ a +"is working");


		var animalDisplay = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalDisplay + "&api_key=5c85886a63464a1bbdca4e06adc0e445&limit=10";
		console.log(queryURL);
		$.ajax({
	    url: queryURL,
	    method: 'GET'
		}).done(function(response) {
	    	// console.log(response);
	    	// console.log(queryURL);
	    	// storing the data from the AJAX request in the results variable
	    	var results = response.data;
	    	// Looping through each result item
	    	for (var i = 0; i < results.length; i++){
	    		// Creating and storing a div tag
	    		var animalDiv = $("<div>");
	    		// Creating a paragraph tag with the result item's rating
	    		var p = $("<p>").text("Rating: " + results[i].rating);
	    		// Creating and storing an image tag
	    		var animalImage = $("<img>");
	    		// Setting the src attribute of the image to a property pulled off the result item
	            animalImage.attr("src", results[i].images.fixed_height.url);
	            // Appending the paragraph and image tag to the animalDiv
	            animalDiv.append(p);
	            animalDiv.append(animalImage);
	            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
	            $("#gifsView").prepend(animalDiv);

	    	};
			});
	});
});