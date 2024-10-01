let input = document.querySelector(".input");
let submitbtn = document.querySelector(".submitbtn");
let PreviousGuess = document.querySelector(".PreviousGuess");
let GuessRemaining = document.querySelector(".GuessRemaining");
let result = document.querySelector(".result");
let report = document.querySelector("#report");
document.getElementById('reportmain').hidden = true;

let guessnum = Math.floor(Math.random() * 100);
console.log(guessnum);
let usernum = input.value;
console.log(usernum);

let chance = 10;
GuessRemaining.innerHTML = `${chance}`;

function resetgame() {
    chance = 10;
    GuessRemaining.innerHTML = `${chance}`;
    document.getElementById('reportmain').hidden = true;
    input.disabled = false;
    submitbtn.disabled = false;
    PreviousGuess.innerHTML = "";
    result.innerHTML = "";
}

const getresult = () => {
    let usernum = input.value;
    console.log(usernum);

    let showprevios = PreviousGuess.innerHTML;

    if (input.value != "") {

        if (chance == 1) {
            document.getElementById('reportmain').hidden = false;
            document.getElementById('divreport').innerHTML = `<button id="restart"onclick="resetgame()" >Restart</button>`;
            input.disabled = true;
            submitbtn.disabled = true;
            report.innerText = `You Lost ,The Guess Number Was ${guessnum}`;
        }
        else if (guessnum == usernum) {
            result.innerHTML = "Congratultion , you guess right number";
            input.disabled = true;
            submitbtn.disabled = true;
        }
        else if (guessnum > usernum) {
            result.innerHTML = "you guess small number"
            PreviousGuess.innerHTML = `${showprevios}  ${input.value} ,`;
            chance--;
            GuessRemaining.innerHTML = `${chance}`;
        }
        else {
            result.innerHTML = "you guess big number"
            PreviousGuess.innerHTML = `${showprevios}  ${input.value} ,`;
            chance--;
            GuessRemaining.innerHTML = `${chance}`;
        }

        input.value = "";
    } else {
        alert("Please Write Some Value");
    }

};

submitbtn.addEventListener("click", getresult);

// on press enter submit
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitbtn.click();
    }
});