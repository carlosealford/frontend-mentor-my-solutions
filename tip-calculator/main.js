/**
 * @description self-invoking function for the tip calculator
 */
(function() {
  // Private variables
  let bill = 0;
  let tipPercent = 0;
  // at least 1 person has to pay for the bill
  let nOfPeople = 1;
  // keep track of last active button to toggle
  let lastActiveBtn = '';

  // bill input listener
  document.querySelector('.tip-calc__enter-bill-input').oninput = (e) => {
    bill = e.srcElement.value;
    updateTotal();
  }

  // tip listener, can be done with pre-set button or input box
  document.querySelector('.tip-calc__select-tip-panel').addEventListener('click', (e) => {
    e.preventDefault();
    // only take action on the buttons/input for the tip
    if (e.srcElement.dataset.tipSetter) {
      // take percent value from button
      tipPercent = e.srcElement.value;
      // toggle the active class to show button is pressed
      let btnToggled = e.srcElement.classList.toggle('btn-active');
      // is this the first time pressing a button dont toggle last active button
      if (lastActiveBtn) lastActiveBtn.classList.toggle('btn-active');
      // remember last active button
      lastActiveBtn = e.srcElement;
      updateTotal();
    }
  });
  // tip input box listener
  document.querySelector('.tip-calc__select-tip-input').oninput = (e) => {
    tipPercent = (e.srcElement.value < 0) ? 0 : e.srcElement.value;
    updateTotal();
  }

  // number of people input listener
  document.querySelector('.tip-calc__n-of-people-input').oninput = (e) => {
    nOfPeople = (e.srcElement.value > 0) ? e.srcElement.value : 1;
    updateTotal();
  }

  // reset button listener
  const resetBtn = document.querySelector('.tip-calc__btn-reset-all');
  resetBtn.addEventListener('click', tipCalculatorReset);

  /**
   * @description Calculates the total amounts for tip and bill
   */
  function updateTotal() {
    // enable reset button only when inputs have been activated
    if (resetBtn.disabled) {
      resetBtn.removeAttribute('disabled');
    }

    // get the elements to display the results
    const tipElement = document.querySelector('.tip-calc__per-person-tip');
    const billElement = document.querySelector('.tip-calc__per-person-amount');

    // calculate the tip and bill
    let tip = ((bill / 100) * tipPercent) / nOfPeople;
    let total = bill / nOfPeople + tip;
    tip = tip.toFixed(2);
    total = total.toFixed(2);

    // update the elements with the calculation results
    tipElement.textContent = (tip === 0) ? "$0.00" : "$" + tip;
    billElement.textContent = (total === 0) ? "$0.00" : "$" + total;
  }

  /**
   * @desciption Reset the tip calculator values
   */
  function tipCalculatorReset(e) {
    // clear all values
    bill = 0;
    tipPercent = 0;
    nOfPeople = 1;
    document.querySelector('.tip-calc__enter-bill-input').value = '';
    document.querySelector('.tip-calc__select-tip-input').value = '';
    document.querySelector('.tip-calc__n-of-people-input').value = '';
    document.querySelector('.tip-calc__per-person-tip').textContent = "$0.00";
    document.querySelector('.tip-calc__per-person-amount').textContent = "$0.00";

    // remove btn-active class from pressed button and clear the variable
    lastActiveBtn.classList.toggle('btn-active');
    lastActiveBtn = false;

    // disable reset button
    resetBtn.setAttribute('disabled', true);
  }
})();
