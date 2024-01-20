const display = document.getElementById("DisplayInput");

// AddNumber to input
function addNumber(input) {
  display.value += input;
}

// Result Calculator
function result() {
  try {
    display.value = eval(display.value);
  } catch (Error) {
    display.value = "Error";
  }
}

// Refresh Number
function clearDisplay() {
  display.value = "";
}
// window.print();
