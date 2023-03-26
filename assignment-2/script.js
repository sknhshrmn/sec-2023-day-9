// SOLUTION BASED ON TUTORIAL HERE:
// https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
// https://www.youtube.com/watch?v=1jAEyP9a1hg

// Declare constant variable
// querySelectorAll to select all dom with the specified class
// thus, querySelectorAll used for operation and number buttons only
const numberButtonsDOM = document.querySelectorAll("[data-number]");
const operationButtonsDOM = document.querySelectorAll("[data-operation]");
const equalsButtonDOM = document.querySelector("[data-equals]");
const deleteButtonDOM = document.querySelector("[data-delete]");
const allClearButtonDOM = document.querySelector("[data-all-clear]");
const previousOperandTextElementDOM = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElementDOM = document.querySelector(
  "[data-current-operand]"
);

// Create a constructor Calculator
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    //   refer clear function
    this.clear();
  }

  // Declare Calculator functions
  // Clear function: delete all the displayed values
  clear() {
    // Set current operand to empty string
    this.currentOperand = "";
    // Set previous operand to empty string
    this.previousOperand = "";
    // Change operation to undefined
    this.operation = undefined;
  }

  // Delete function: delete the last character in the current operand
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // appendNumber function: append number and operation to the
  appendNumber(number) {
    // check if string include ".". if yes,return/ stop execute
    if (number === "." && this.currentOperand.includes(".")) return;
    // Normal case, append the operand and number to the currentOperand
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // chooseOperation function: choose which operation based on innerText in the operator button
  chooseOperation(operation) {
    // check if there is nothing in current operand, return/exit the function
    if (this.currentOperand === "") return;
    // check if there is string in the previousOperand. If yes, execute function compute()
    if (this.previousOperand !== "") {
      this.compute();
    }
    // Set the operation
    this.operation = operation;
    // Set the previousOperand
    this.previousOperand = this.currentOperand;
    // Reset the currentOperand
    this.currentOperand = "";
  }

  // compute function: Execute the mathematical operation
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    // check if prev and current operand is not a number, return/exit function
    if (isNaN(prev) || isNaN(current)) return;

    // switch case of operation
    switch (this.operation) {
      // case addition
      case "+":
        computation = prev + current;
        break;
      // case substraction
      case "-":
        computation = prev - current;
        break;
      // case multiplication
      case "*":
        computation = prev * current;
        break;
      // case division
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }

    // Set the current operand
    this.currentOperand = computation;

    // Reset the operation and previous operand
    this.operation = undefined;
    this.previousOperand = "";
  }

  // Update the display ( previous and current operand), when number buttons/ operator buttons / equal buttons / AC buton / DEL button is clicked
  updateDisplay() {
    // Update the current operand display
    this.currentOperandTextElement.innerText = this.currentOperand;
    //   append operation to the previous operand if exist
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
    // if operation not exist (after compute), empty the previous operand
    else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

// Declare new constant variable calculator
const calculator = new Calculator(
  previousOperandTextElementDOM,
  currentOperandTextElementDOM
);

// Every time number buttons are clicked, append the number
numberButtonsDOM.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

//   Every time operator buttons are clicked, choose operation to be executed
operationButtonsDOM.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

//   When equal button is clicked, compute and update the output/display
if (equalsButtonDOM) {
  equalsButtonDOM.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });
}

//   When AC button is clicked, clear all and update the output/display

allClearButtonDOM.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

//    When DEL button is clicked, delete the last number/operator in the current oprand

if (deleteButtonDOM) {
  deleteButtonDOM.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });
}
