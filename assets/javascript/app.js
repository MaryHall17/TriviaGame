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
	// function score(optradio) {
	//  var point1 =parseInt(document.getElementById("ans1").value);
	//  var point2 =parseInt(document.getElementById("ans2").value);
	//  var point3 =parseInt(document.getElementById("ans3").value);
	//  var point4 =parseInt(document.getElementById("ans4").value);
	//  var score = point1 + point2 + point3 + point4;

	//  console.log(score);
	//  console.log(point1);
	//  console.log(point2);
	//  console.log(point3);
	//  console.log(point4);
	// };
	//Collect values from answers to pass into "if checked" statement
	// var ans1 = $("#ans1").checked
	// var ans2 = $("#ans2").checked
	// var ans3 = $("#ans3").checked
	// var ans4 = $("#ans4").checked

	//Parse values from answers into integers to later use for score.
	// var point1 = parseInt(document.getElementById("ans1").value); 
	var point2 = parseInt(document.getElementById("ans2").value);
	var point3 = parseInt(document.getElementById("ans3").value);
	var point4 = parseInt(document.getElementById("ans4").value);

	
	var integer = 0;//variable that holds our score
	baseScore = parseInt(integer);

		// function score() { 
		// 		if ($("#ans1".is(":checked")) { 
		// 			alert("You got one right!");
		// 			baseScore++;
		// 		} 
		// 		if (ans2 = true) {
		// 			alert("You got two right");
		// 			baseScore++;
		// 		} 
		// 		if (ans3 = true) {
		// 			alert("You got three right");
		// 			baseScore++;
		// 		} 
		// 		if (ans4 = true) {
		// 			alert("You got four right")
		// 			baseScore++;
		// 		}
		// 	} 


$(document).ready(function triviaGame() {

	//Find if the answers are clicked, if it they are clicked, add to the score
	//First answer
	$("#ans1").click(function answer1() {
		if($("#ans1").is(':checked')) {
			alert("It's checked!");
			baseScore++;
		}
	});
	//Second answer
	$("#ans2").click(function answer2() {
		if($("#ans2").is(':checked')) {
			alert("It's checked!")
			baseScore++;
		}
	});
	//Third answer
	$("#ans3").click(function answer3() {
		if($("#ans3").is(':checked')) {
			alert("It's checked!")
			baseScore++;
		}
	});
	// Fourth answer
	$("#ans4").click(function answer4() {
		if($("#ans4").is(':checked')) {
			alert("It's checked!")
			baseScore++;
		}
	});

	//Timer function
	var number = 25 //set our number to 60 for a minute
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
			//call the baseScore... 
			console.log(baseScore);
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






