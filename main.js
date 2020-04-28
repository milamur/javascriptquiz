
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "rake db:migrate") {
		correct++;
}
	if (question2 == "Automatically generates the models, views and controllers you need for a table") {
		correct++;
}
	if (question3 == "It accepts a request and dispatches a response from the Rails application") {
		correct++;
	}

	if (question4 == "They push an element to the left/right and allow text to wrap around it") {
		correct++;
	}

	if (question5 == "mkdir") {
		correct++;
	}

	if (question6 == "Ruby") {
		correct++;
	}

	if (question7 == "Explain the changes made to the file in quotes") {
		correct++;
	}

	if (question8 == "for (let i = 0 ; i < string.length; i++) { strings[i] = strings[i] + 's'; }") {
		correct++;
	}

	if (question9 == "A method") {
		correct++;
	}

	if (question10 == "It sends a request to the Rails server running locally on port 3000") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
