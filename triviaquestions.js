function Question(pics, text, choices, answers) {
    this.pics = pics;
    this.text = text;
    this.choices = choices;
    this.answers = answers;


}

Question.prototype.correctAnswer = function (choice) {
    return choice === this.answers;
}

