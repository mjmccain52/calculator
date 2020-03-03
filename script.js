let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;
let operandBuilder = "";
let expression = [];
let updateDisplay = () => document.getElementById('display').textContent = operandBuilder;

Array.from(document.getElementsByClassName("digit")).forEach(button => {
    button.addEventListener('click', () => {
        operandBuilder += button.textContent;
        updateDisplay();
    });
});

Array.from(document.getElementsByClassName("operator")).forEach(button => {
    button.addEventListener('click', () => {
        if (expression.length == 2){
            let operator = expression.pop();
            let a = expression.pop();
            let b = parseInt(operandBuilder);
            switch (operator){
                case "+":
                    expression.push(add(a, b));
                    break;
                case "-":
                    expression.push(subtract(a, b));
                    break;
                case "*":
                    expression.push(multiply(a, b));
                    break;
                case "/":
                    expression.push(divide(a, b));
                    break;
            }
        } else {
            expression.push(parseInt(operandBuilder));
        }
        
        operandBuilder = expression[0];
        updateDisplay();
        if (button.textContent != "="){
            expression.push(button.textContent);
        } else expression = [];
        operandBuilder = "";
        console.log (expression);
    });
});

document.getElementById('clear').addEventListener('click', () => {
    operandBuilder = ""
    expression = [];
    updateDisplay();
});