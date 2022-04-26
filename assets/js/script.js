var questionIndex = 0;

function startQuiz() {

    var startButton = document.getElementById("startpart");
	startButton.addEventListener("click", startQuiz);

    	document.getElementById("startpart").onclick = function () {
		document.getElementById("startpart").style.display = "none";
		document.getElementById("question-container").classList.remove("hide");
		var countdown = function () {
			console.log(counter);
			counter--;
			if (counter === 0) {
				clearInterval(startCountdown);
			}

			var timeBox = document.getElementById("timepart");
			timeBox.innerHTML = "";
			var timePlace = document.createElement("timeSpot");
			timePlace.setAttribute("class", "time");
			timePlace.innerText = counter;

			timeBox.appendChild(timePlace);
		};
		var startCountdown = setInterval(countdown, 1000);
        };
    
    function nextQuestion() {
		var currentQuestion = questions[questionIndex];
		var answerGrid = document.getElementById("answer-buttons");
		answerGrid.innerHTML = "";

		var questionTitle = document.getElementById("question");
		questionTitle.innerText = currentQuestion.title;
		currentQuestion.answers.forEach(function (answer, i) {
			//1 Make the piece of html in js
			var anwserButton = document.createElement("button");
			//2 Dress that html up how u want!! give it text . class name ect...
			anwserButton.setAttribute("class", "btn choice-btn");
			anwserButton.innerText = answer;
            
			//3 Stick that shabang on the page!! .appendCHild or jquery .append()
			answerGrid.appendChild(anwserButton);
		});

		var buttons = document.querySelectorAll(".choice-btn");
		console.log("buttons ?", buttons);

		buttons.forEach(function (btn) {
			btn.addEventListener("click", handleClick);
		});
	}
    nextQuestion();
    
    function handleClick(event) {
		console.log("we got clicked", event.target.innerText);

		if (event.target.innerText === questions[questionIndex].correct) {
			console.log("good", gotRight);

			var scoreBox = document.getElementById("scorepart");
			scoreBox.innerHTML = "";
			var scorePlace = document.createElement("scoreSpot");
			scorePlace.setAttribute("class", "score");
			scorePlace.innerText = gotRight++;

			scoreBox.appendChild(scorePlace);
		} else {
			console.log("bad");
		}

		questionIndex++;

		if (questions.length <= questionIndex) {
			document.getElementById("scoreinput").classList.remove("hide");
			document.getElementById("question-container").classList.add("hide");
			console.log("gameOVER");
		} else {
			nextQuestion();
		}
	}
}
startQuiz();

