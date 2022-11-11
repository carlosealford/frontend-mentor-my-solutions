# PLAN for the calculator logic

## Calculator logic

1. add listeners to all the buttons ✅
2. Operands should be stored in their rightful locations ✅
3. operators should do their thing ✅
4. numbers should display their value in the screen

### Step 1

Add listeners to all the buttons 

- Query the keypad ✅
- Add a listener to it ✅
- Create a function to sift through the listner and find the button pressed is operand or operator ✅
  - think about using a switch statement ✅
    - operands do one thing and operators another ✅

### Step 2

Operands should be stored in their rightful locations

- create variables to hold left operand, right operand, operator ✅
- create variable, like a switch, to identify if the operand it to be stored to the left / right ✅
- create a function that just stores the operands ✅
  - it will take in 1 parameter, the value of the operand ✅
  - use conditional to see if the operand goes on the left or right ✅

### Step 3

Operators should do their thing

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

### Step 4

numbers should display their value in the screen

  - query the html element to display number and store it in a variable ✅
  - create a display function that takes in 1 parameter: ✅
    - parameter: is a string that tells which value to show: leftOperand, rightOperand or total ✅
    - new value is added or removed to operand variable ✅
    - equals button is pressed as it will calculate a new result ✅
    - del button is pressed because the operand value has changed ✅
    - the reset button is pressed as it clears all and we need to show this. ✅

## USE CASES

**CASE 1**
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

**CASE 2**
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


**CASE 3** - DISPLAY LIMIT
- Need to make sure that the number always fits inside the results screen
  - whole numbers:
    - display whole number first
    - if the whole number is larger than screen size then display TOO LARGE
  - decimals:
    - leading zeros are removed
    - display all as long as within display limit
    - when available must always display at least 1 decimal place.


## RANGE SLIDER LISTENER

- create global variable to track current active theme ✅
- query input element ✅
- set event listener for change ✅
- create function ✅
  - query section element holding the whole calculator ✅
  - query selection made by range slider and store in variable ✅
  - remove old theme class ✅
  - store new theme class ✅
  - toggle section class with selection made in range slider ✅
