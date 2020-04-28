
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
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

	if (question9 == "method") {
		correct++;
	}

	if (question10 == "It sends a request to the Rails server running locally on port 3000") {
		correct++;
	}

	var pictures = ["win.jpg", "almost.jpg", "lose.jpg"];
	var messages = ["Perfect!", "Not quite!", "Better luck next time..."];
	var score;

	if (correct < 4) {
			score = 2;
		}

	if (correct >= 4 && correct < 6) {
			score = 2;
		}

	if (correct >= 6 && correct < 10) {
			score = 1;
		}

	if (correct === 10) {
			score = 0;
		}

	console.log(score);

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
