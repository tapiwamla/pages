let button = document.getElementsByClassName("btn")
let correctAnswer = document.getElementsByClassName("correct-answer")

let preset = "Correct Answer: "

function reveal() {
    if (button[0].textContent == "Reveal Answer") {
        button[0].textContent = "Hide Answer";

        correctAnswer[0].textContent += "D: You can only use let, var, or const."
    }

    else {
        button[0].textContent = "Reveal Answer";

        correctAnswer[0].textContent = preset
    }
}

function revealOne() {
    if (button[1].textContent == "Reveal Answer") {
        button[1].textContent = "Hide Answer"

        correctAnswer[1].textContent += "B: You can access the element with the ID 'myElement' in JavaScript using 'document.getElementById(\"myElement\")'."
    }

    else {
        button[1].textContent = "Reveal Answer"

        correctAnswer[1].textContent = preset
    }
}

function revealTwo() {
    if (button[2].textContent == "Reveal Answer") {
        button[2].textContent = "Hide Answer";

        correctAnswer[2].textContent += "B: The difference between '==' and '===' in JavaScript is that '==' compares only the value, while '===' compares both the value and the type of two operands."
    }

    else {
        button[2].textContent = "Reveal Answer"

        correctAnswer[2].textContent = preset
    }
}

function revealThree() {
    if (button[3].textContent == "Reveal Answer") {
        button[3].textContent = "Hide Answer"

        correctAnswer[3].textContent += "D: You can define a function in JavaScript using 'function myFunction() { ... }', 'const myFunction = () => { ... }', or 'let myFunction = function() { ... }'."
    }

    else {
        button[3].textContent = "Reveal Answer"

        correctAnswer[3].textContent = preset
    }
}

function revealFour() {
    if (button[4].textContent == "Reveal Answer") {
        button[4].textContent = "Hide Answer"

        correctAnswer[4].textContent += "D: The purpose of the 'this' keyword in JavaScript is that it can refer to different objects depending on the context."
    }

    else {
        button[4].textContent = "Reveal Answer"

        correctAnswer[4].textContent = preset
    }
}

