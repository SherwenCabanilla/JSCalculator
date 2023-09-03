let concatenatedValue = "";
let value1 = 0;
let value2 = 0;
let oper;
let gResult = 0;

function giClick(id) {
  let get = document.getElementById(id);
  let s = get.value;
  concatenatedValue += s; // Concatenate the value of the clicked button
  document.getElementById("numDis").innerHTML = concatenatedValue; // Display the concatenated value
}

function operators(operator) {
  let get = document.getElementById(operator);
  let s = get.value;
  let ni = (document.getElementById("operator").innerHTML =
    concatenatedValue + s);
  document.getElementById("numDis").innerHTML = "";
  value1 = parseInt(concatenatedValue);
  concatenatedValue = "";
  oper = s;
}

function equals() {
  value2 = parseInt(concatenatedValue);
  let result = compute(value1, value2, oper);
  document.getElementById("operator").innerHTML = "";
  document.getElementById("numDis").innerHTML = result;
  concatenatedValue = result;
}

function compute(value1, value2, oper) {
  let result;
  switch (oper) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
  }
  return result;
}

function deleteAll() {
  document.getElementById("numDis").innerHTML = "";
  document.getElementById("operator").innerHTML = "";
  concatenatedValue = "";
}

function deleteLineNum() {
  document.getElementById("numDis").innerHTML = "";
  concatenatedValue = "";
}

function onlyOneDelete() {
  let defaultValue = document.getElementById("numDis");
  let currentValue = defaultValue.value;
  concatenatedValue = concatenatedValue.slice(0, -1);
  document.getElementById("numDis").innerHTML = concatenatedValue;
}

let num = function haha() {
  let b = 4;
  let x = 5;
  return `${b}${x}`;
};
document.getElementById("disp").innerHTML = num();
