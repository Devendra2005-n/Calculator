function factorial(num) {
    if (num < 0) {
        return "Undefined";
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function clearDisplay() {
    let num1 = document.getElementById('num1').value = '';
    let num2 = document.getElementById('num2').value = '';
}

function calculate(operation) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "2root":
            result = Math.sqrt(num1);
            break;
        case "3root":
            result = Math.cbrt(num1);
            break;
        case "!":
            result = factorial(num1);
            break;
        case "AC":
            result = clearDisplay(num1)(num2);
            break;
        default:
            result = "Invalid Operation";
    }

    alert("Result: " + result);
    console.log("Result:", result);
}