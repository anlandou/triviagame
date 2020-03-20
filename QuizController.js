function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}


Quiz.prototype.getQuestionIndex = function () {
    for (var i = 0; i < myArray.length; i++) {
        if (questionIndex == i) {
            document.write(myArray[0][1]);
        }
    }
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answers) {

    if (this.getQuestionIndex().correctAnswer(answers)) {
        this.score++;
    }

    this.questionIndex++;

}