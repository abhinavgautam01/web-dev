let random = Math.random();
let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let c = prompt("Enter operation (+, -, *, /): ");
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

console.log(random)

if (random < 0.1) {
    let result;
    switch (c) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            alert("Invalid operation");
            break;
    }
    alert(`The result is ${result}`);
} else {
    c = obj[c];
    let faultyResult;
    switch (c) {
        case "+":
            faultyResult = a - b; 
            break;
        case "-":
            faultyResult = a / b; 
            break;
        case "*":
            faultyResult = a + b; 
            break;
        case "/":
            faultyResult = Math.pow(a, b); 
            break;
        default:
            alert("Invalid operation");
            break;
    }
    alert(`Faulty result is ${faultyResult}`);
}
