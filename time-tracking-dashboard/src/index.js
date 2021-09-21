import Data from '../data.json';

let timeTrackingDashboard = (function() {
  let activityTimeframeElem = document.querySelector('.ttdash__timeframe-btn-weekly');
  let activityTimeframe = 'weekly';
  let activityCards = {}

  // set listener for each timeframe button
  function setListeners() {
    const timeframeBtns = document.querySelectorAll('.ttdash__timeframe-btns');
    timeframeBtns.forEach(btn => btn.addEventListener('click', toggleBtn))
  }

  function toggleBtn(e) {
    e.preventDefault();
    activityTimeframeElem.removeAttribute('disabled');
    activityTimeframeElem = e.srcElement;
    activityTimeframe = e.srcElement.dataset.timeframe;
    e.srcElement.setAttribute('disabled', true);
    updateActivityCards(e.srcElement.dataset.timeframe);
  }

  function prepCardElements() {
    const activityElements = document.querySelectorAll('.ttdash__times-list-item');

    activityElements.forEach(activity => {
      activityCards[activity.parentElement.dataset.cardActivity] = {
        ...activityCards[activity.parentElement.dataset.cardActivity],
        [activity.dataset.time]: activity,
      }
    });
  }

  function updateActivityCards(timeframe) {
    Data.forEach(activity => {
      let currentTime = (activity.timeframes[activityTimeframe].current > 1)
                          ? activity.timeframes[activityTimeframe].current + 'hrs'
                          : activity.timeframes[activityTimeframe].current + 'hr';
      let timeframe = (activityTimeframe === 'daily')
                      ? 'Day - '
                      : (activityTimeframe === 'weekly')
                        ? 'Week - '
                        : 'Month - ';
      let hours = (activity.timeframes[activityTimeframe].previous > 1) ? 'hrs' : 'hr';
      let previousTime = 'Last ' + timeframe + activity.timeframes[activityTimeframe].previous + hours;
      activityCards[activity.title.toLowerCase()].current.textContent = currentTime;
      activityCards[activity.title.toLowerCase()].previous.textContent = previousTime;
    });
  }

  function updateCard(card) {
    const activityCards = document.querySelectorAll('.ttdash__times-list-item');
  }

  setListeners();
  prepCardElements();
})();
