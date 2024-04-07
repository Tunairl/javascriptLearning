let buffer = null;

function calculate() {
    let operator = document.querySelector('input[name="operator"]:checked').value;
    let result;

    let input1 = +document.getElementById("num1").value;
    let input2 = +document.getElementById("num2").value;

    if (buffer !== null) {
        input2 = +buffer;
        buffer = null;
    }

    switch (operator) {
        case ("+"):
            result = addition(input1, input2);
            break;
        case ("-"):
            result = subtraction(input1, input2);
            break;
        case ("*"):
            result = multiplication(input1, input2);
            break;
        case ("/"):
            result = division(input1, input2);
            break;
        default:
            result = "Invalid Operator";
            break;
    }
    buffer = result;

    document.getElementById("result").innerHTML = result;
}

function clearAll() {
    empty(num1);
    empty(num2);
    empty(buffer);
}

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        return "Cannot divide by 0";
    }
    return num1 / num2;
}
