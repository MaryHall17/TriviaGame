var integer = 0;//variable that holds our score
baseScore = parseInt(integer); //parse as integer to add up score


$(document).ready(function triviaGame() {

	//Timer function

	var number = 60 //set our number to 60 for a minute
	var intervalId; //this variable will hold the interval to clear it after time is up
	
	function countdown() {
	intervalId=setInterval(decrement, 1000); //decreases number by one every second
	};

	//Function to decrement the timer
	function decrement() {
		number--; //decreases the number variable (time) by one 
		$("#timer").html("<h2>" + number + "<h2>"); //shows the timer as the number variable in the top div
	
	
		//When time runs out...
		if (number === 0) {

			//...run the stop function defined below
			stop();
			
			//Scoring if statements...
			//Query whether it the radio button is checked or not after time is up to allow for toggling.
			if($("#ans1").is(':checked')) {
				baseScore++;
			};
			if($("#ans2").is(':checked')){
				baseScore++;
			};
			if($("#ans3").is(':checked')) {
				baseScore++;
			};
			if($("#ans4").is(':checked')) {
				baseScore++;
			};
			
			//call the baseScore in the console to run scoring if/else logic...
			console.log(baseScore);
			
			// Alert time is up
			alert("Time Up!"); 
			
			//Scoring if/else logic for css changes
			if(baseScore==4) {
				//Change from original background to aced screen:
				$("body").toggleClass("aced");
				//Replace questions with victory message:
				$(".container").html("Score is " + baseScore + " " + "out of 4 " + "You aced it! The foaming mouth guy is your biggest fan!");
			} else if(baseScore==3) {
				//Change from original background to mediocre screen:
				$("body").toggleClass("mediocre");
				//Replace questions with almost there message:
				$(".container").html("Score is " + baseScore + " " + "out of 4 " +  "You're almost there! Drink some tea with Iroh and brush up your Avatar knowledge.");
			} else {
				//Change from original background to failing screen:
				$("body").toggleClass("failing");
				//Replace questions with failing message:
				$(".container").html("Score is " + baseScore + " " + "out of 4 " +  "Season One Zuko has more honor than you!");	
			}
		}
	}; 

	//The stop function to clear the intervalId, and thus stop decrementing at zero
	function stop() {
		clearInterval(intervalId);
	}

	console.log(countdown()); //executes the timer function; console logged to make sure it's working
});






