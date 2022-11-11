/*
TODO:
1. add listeners to all the buttons ✅
2. Operands should be stored in their rightful locations ✅
3. operators should do their thing ✅
4. numbers should display their value in the screen
*/

/*
1. Add listeners to all the buttons 
- Query the keypad ✅
- Add a listener to it ✅
- Create a function to sift through the listner and find the button pressed is operand or operator ✅
  - think about using a switch statement ✅
    - operands do one thing and operators another ✅

2. Operands should be stored in their rightful locations
- create variables to hold left operand, right operand, operator ✅
- create variable, like a switch, to identify if the operand it to be stored to the left / right ✅
- create a function that just stores the operands ✅
  - it will take in 1 parameter, the value of the operand ✅
  - use conditional to see if the operand goes on the left or right ✅

3. Operators should do their thing
- make sure variable 'operator' exists as it will contain the operator symbol ✅
- create function 'actOnOperator' to handle which operator was pressed ✅
  - takes 1 parameter with the operator symbol ✅
  - use switch statement to handle each operator separately
  - 'reset' will just reset all variable back to 0 ✅
  - 'del' will remove the last digit from the active operand (left or right) ✅
  - '=' will take leftOp and rightOp combining them according to the operator (+, -, /, *) ✅
  - '+, -, *, /' operators will just store their value inside the 'operator' variable ✅

create function to prepare result output so that it fits in screen
  - we will check the value inside the global 'total' ✅
  - create variable to hold the decimals and whole numbers, use regex to separate the two ✅
    - for decimals we will only store the most significant values ✅
  - if whole number is larger than screen ✅
    - 'total' = 'NUMBER TOO LARGE' ✅
  - if whole number is same size and display or if there are no decimals ✅
    - 'total' = wholeNumbesr; ✅
  AT THIS STAGE WE HAVE ROOM OR DECIMALS TO INCLUDE
  - temporarily store the difference between whole number and display limit, add 1 for the space taken by dot (.) ✅
  - extract the decimals up to the value of difference and store in temp variable ✅
  - 'total' to become whole number plus the amount of decimals according to difference, MAX 4 places ✅

USE CASES

CASE 1
'Basic operation' works the same for substraction, division and mutiplication

- Press 1
  - leftOp = 1
-Press 3
  - leftOp = 3
- Press + (add)
  - operantor = +
- Press 4
  - rightOp = 4
- Press = (equals)
  - total = leftOp + rightOp
- Press = (equals)
  - leftOp = total
  - rightOp = 0

CASE 2
'Carry on from previous sum'
leftOp = 17, rightOp = 0, total = 17

- Press - (minus)
  - operator = -
- Press 5
  - rightOp = 1
- Press 2
  - rightOp = 12
- Press = (equals)
  total = leftOp - rightOp
  - leftOp = total
  - rightOp = 0


CASE 3 - DISPLAY LIMIT
- Need to make sure that the number always fits inside the results screen
  - whole numbers:
    - display whole number first
    - if the whole number is larger than screen size then display TOO LARGE
  - decimals:
    - leading zeros are removed
    - display all as long as within display limit
    - when available must always display at least 1 decimal place.
*/

var leftOperand = '', rightOperand = '', total = 0, operator;
// switch to track where operand  will be stored
var storeInLeftOperand = true;
var displayLimit = 14;

/**
 * @description Formats the calculation result to make sure it fits display limit
 */
function prepareResultForScreen() {
  // separate whole and decimal numbers. decimals will loose any trailing zeros.
  const re = /(\d*)\.?([^0]{0,4})/;
  let [,wholeNumbers, decimalNumbers] = String(total).match(re);

  if (wholeNumbers.length > displayLimit) {
    total = 'Number too large';
  }else if (wholeNumbers.length == displayLimit || decimalNumbers.trim().length == 0) {
    total = wholeNumbers;
  }else {
    let difference = displayLimit - (wholeNumbers.length + 1);
    let decimal = decimalNumbers.match(`\\d{0,${difference}}`);
    total = `${wholeNumbers}.${decimal}`;
  }
}

/**
 * @description stores the number pressed by user
 * @param {string} value - the number pressed
 */
function storeOperand(value) {
  if (storeInLeftOperand) {
    leftOperand += value;
  }else{
    rightOperand += value;
  }
}

/**
 * @description Decides what to action to perform depending on operator
 * @param {string} op - name of operator 
 */
function actOnOperator(op) {
  switch (op) {
    case 'reset':
      leftOperand = '';
      rightOperand = '';
      operator = '';
      total = 0;
      storeInLeftOperand = true;
      break;
    case 'del':
      if (storeInLeftOperand) {
        leftOperand = leftOperand.substring(0, leftOperand.length - 1);
      }else{
        rightOperand = rightOperand.substring(0, rightOperand.length - 1);
      }
      break;
    case '=':
      if (rightOperand != '') {
        calculateTotal();
        prepareResultForScreen();
      }
      break;
    default:
      // track the operator +, -, / or * and stop storing input in the left hand operand
      operator = op;
      storeInLeftOperand = false;
  }
}

/**
 * @description Takes left/right operands and performs operation, storing the result
 */
function calculateTotal() {
  switch (operator) {
    case '+':
      total = Number(leftOperand) + Number(rightOperand)
      break;
    case '-':
      total = Number(leftOperand) - Number(rightOperand);
      break;
    case '*':
      total = Number(leftOperand) * Number(rightOperand);
      break;
    case '/':
      total = Number(leftOperand) / Number(rightOperand);
      break;
    default:
      console.error("You have fallen through the switch statement");
  }
  
  // 4 decimal places is enough precision for this project
  total = total.toFixed(4);
  // reset operand variables for next calculation
  leftOperand = String(total);
  rightOperand = '';
}

/**
 * @description checks which type of buttons was pressed and forwards to function to deal with
 * @param {object} e - event object
 */
function calcButtonPressed(e) {
  switch (e.target.dataset.type) {
    case 'operand':
      storeOperand(e.target.dataset.btn);
      break;
    case 'operator':
      actOnOperator(e.target.dataset.btn)
      break;
    default:
      console.log("NOTHING HAPPENED")
  }
}

var calcKeypad = document.querySelector('.calc-keypad');
calcKeypad.addEventListener('click', function buttonPressed(e) {
  if (e.target.dataset.type) {
    calcButtonPressed(e)
  }
});