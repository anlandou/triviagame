//ABout button is pressed 

let modal = document.getElementById("about_modal");

let btn = document.getElementById("about_button");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

//When Play button is pressed  
//let questions = document.getElementById("question"); 

let trivia_mode = document.getElementById("trivia-modal");

let btn1 = document.getElementById("play_button");

let quit_btn = document.getElementById("quit-btn");

let nextbtn = document.getElementById("next-btn");

let imgOne = document.getElementById("img1");

btn1.onclick = function Questions() {
    trivia_mode.style.display = "block";
    Quiz();
}
quit_btn.onclick = function () {
    trivia_mode.style.display = "none";
}


