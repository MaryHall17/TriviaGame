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

//Timer function



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

});

