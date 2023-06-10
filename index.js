const userInput = document.getElementById("user_input")

let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = ''
}
function erase() {
    expression = ''
    userInput.value = ''
}
console.log("Sammy")