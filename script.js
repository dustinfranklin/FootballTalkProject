const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

const result = document.getElementById("result");

function getNumbers() {
    return {
        num1: Number(num1Input.value),
        num2: Number(num2Input.value)
    };
}

addBtn.addEventListener("click", function () {

    const { num1, num2 } = getNumbers();

    result.textContent = num1 + num2;

});

subtractBtn.addEventListener("click", function () {

    const { num1, num2 } = getNumbers();

    result.textContent = num1 - num2;

});

multiplyBtn.addEventListener("click", function () {

    const { num1, num2 } = getNumbers();

    result.textContent = num1 * num2;

});

divideBtn.addEventListener("click", function () {

    const { num1, num2 } = getNumbers();

    if (num2 === 0) {
        result.textContent = "Cannot divide by zero";
        return;
    }

    result.textContent = num1 / num2;

});