// Psuedo Code:
	//Timer that counts down from one minute after play button is clicked
		//Use time converter and decrementer from stopwatch exercise
	//Assign values to buttons
	//Match values to variable
	//Nest score count in time run out function, so score doesn't add for every click
	//if (answers array value=button value) {
		//add one to invisible score
		//}
	//if (score=4) {
		//show aced screen
	//}else if (score=3) {
		//show mediocre screen
	//} else {
		//show flunked screen
	//}

$(document).ready(function assignValues() {
	//Variable assignment:
	var ans1=1; //assigned value to correct answer for Q1
	var ans2=2; //assigned value to correct answer for Q2
	var ans3=3;	//assigned value to correct answer for Q3
	var ans4=4; //assigned value to correct answer for Q4
	$("#ans1").html(ans1);
	$("#ans2").html(ans2);
	$("#ans3").html(ans3);
	$("#ans4").html(ans4);
	console.log(ans1);
	console.log(ans2);
	console.log(ans3);
	console.log(ans4);
	//Timer function
	var number = 60 //set our number to 60 for a minute
	var intervalId; //this variable will hold the interval for the countdown function
	
	function countdown() {
	intervalId=setInterval(decrement, 1000); //decreases number by one every second
	};

	//Function to decrement the timer
	function decrement() {
		number--; //decreases the number variable by one 
		$("#timer").html("<h2>" + number + "<h2>"); //shows the timer as the number variable in the top div
	
	
		//When time runs out...
		if (number === 0) {

			//...run the stop function defined below
			stop();
			//...run the scoring function
			// Alert time is up
			alert("Time Up!");
		}
	};

	//The stop function to clear the intervalId
	function stop() {
		clearInterval(intervalId);
	}

	console.log(countdown()); //executes the timer function; console logged to make sure it's working
});






