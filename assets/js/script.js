var questionIndex = 0;
var gotRight = 1;
var counter = questions.length * 15;
var counterId;


var timeBox = document.getElementById("time-box");
var timePlace = document.createElement("timeSpot");

function startQuiz() {

    var startButton = document.getElementById("startpart");
	startButton.addEventListener("click", startQuiz);

    	document.getElementById("startpart").onclick = function () {
		document.getElementById("startpart").style.display = "none";
            document.getElementById("question-container").classList.remove("hide");
            
		// var countdown = function () {
		// 	console.log(counter);
        //     countdown();
		// 	counter--;
		// 	if (counter === 0) {
		// 		clearInterval(startCountdown);
		// 	}

			
			timeBox.innerHTML = "";
			
			timePlace.setAttribute("class", "time");
			timePlace.textContent = counter;

			timeBox.appendChild(timePlace);
		 
		counterId = setInterval(countdown, 1000);
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
			anwserButton.textContent = answer;
            
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
		console.log("we got clicked", event.target.textContent);

		if (event.target.textContent === questions[questionIndex].correct) {
			console.log("good", gotRight);

			var scoreBox = document.getElementById("scorepart");
			scoreBox.innerHTML = "";
			var scorePlace = document.createElement("scoreSpot");
			scorePlace.setAttribute("class", "score");
			scorePlace.innerText = gotRight++;

			scoreBox.appendChild(scorePlace);
		} else {
            // console.log("bad");
            // counter -= 15;
            // if (counter < 0) {
            //     counter = 0;
            // }
            // timeBox.textContent = counter;
			
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
    
    function endQuiz() {
        clearInterval(counterId);

        var endScreenEl = document.getElementById("end-screen");
        endScreenEl.removeAttribute("class");

        var finalScoreEl = document.getElementById("final-score")
        finalScoreEl.textContent = counter;

        questionIndex.setAttribute("class", "hide");
    }


    function countdown() {
        counter--;
        timePlace.innerText = counter;

        if (counter <= 0) {
            endQuiz();
        }
        
    }

}
startQuiz();

