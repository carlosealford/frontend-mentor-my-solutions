/**
 * author: Carlos E Alford @webshuriken
 * version: 1.0
 * created: 11-11-2022
 */

var leftOperand = '', rightOperand = '', total = 0, operator;
// switch to track where operand  will be stored
var storeInLeftOperand = true;

// query display element
var display = document.querySelector('.calc-screen-value');
var displayLimit = 14;

// active calculator theme
var activeTheme = 'calc-theme-1';

/**
 * @description updates the html with calculator values
 * @param {string} value - value to update the display with
 */
function updateDisplay(value) {
  display.textContent = value;
}

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
    updateDisplay(leftOperand);
  }else{
    rightOperand += value;
    updateDisplay(rightOperand);
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
      updateDisplay(total);
      break;
    case 'del':
      if (storeInLeftOperand) {
        leftOperand = leftOperand.substring(0, leftOperand.length - 1);
        updateDisplay(leftOperand);
      }else{
        rightOperand = rightOperand.substring(0, rightOperand.length - 1);
        updateDisplay(rightOperand);
      }
      break;
    case '=':
      if (rightOperand != '') {
        calculateTotal();
        prepareResultForScreen();
        updateDisplay(total);
      }
      break;
    default:
      // track the operator +, -, / or * and stop storing input in the left hand operand
      operator = op;
      storeInLeftOperand = false;
      updateDisplay(rightOperand);
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
      console.error("Fallen through the calcButtonPressed function. Logic error.");
  }
}

// keypad listener
var calcKeypad = document.querySelector('.calc-keypad');
calcKeypad.addEventListener('click', function buttonPressed(e) {
  if (e.target.dataset.type) {
    calcButtonPressed(e)
  }
});

// theme slider listener
var themeSlider = document.querySelector('#themeSelectorRange');
themeSlider.addEventListener('change', function updateCalcTheme(e) {
  let calculator = document.querySelector('.site-main');
  let theme = e.target.value == '0' 
    ? 'calc-theme-1' 
    : e.target.value == '50' 
      ? 'calc-theme-2' 
      : 'calc-theme-3';

  // remove active theme
  calculator.classList.toggle(activeTheme);
  activeTheme = theme;
  // add selected theme
  calculator.classList.toggle(theme);
});