function populate() {
    if (quiz.isEnded()) {
        showScores();
    }

    else {
        // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices 

        var choices = quiz.getQuestionIndex().choices;

        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;


};


function showScores() {
    var gameOverHtml = "<h1> Thanks for playing!  </h1>";
    gameOverHtml += "<h2 id = 'score'>  You scored " + quiz.score + " out of  " + quiz.questions.length + " </h2>";
    var element = document.getElementById("trivia-modal");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("borscht.png", "This dish named Borscht, is a famous dish from which one of the following countries?", ["Philippines", "Ukraine", "Greece", "Greenland"], "Ukraine"),
    new Question("bracketimg.png", "She is a grammy award nominated artist with over 150 awards and is known for her eclectic style, who is she?", ["Grimes, from Canada", "MØ, from Denmark", "Demi Lovato, from New Mexico", "Bjork, from Iceland"], "Bjork, from Iceland"),
    new Question("pelmeni.png", "What country does this flag belong to? ", ["Nepal", "Japan", "Somalia", "Bolivia"], "Nepal"),
]

var quiz = new Quiz(questions);

populate();
