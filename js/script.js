const radioSection = document.querySelector('#radio-section');
const metric = document.querySelector('#Metric-form');
const imperial = document.querySelector('#Imperial-form');

//PLAN
//*****
//When a user clicks a radio button it should bring out its form
//we have metric form and imperial form
//When metric radio is selected which is already checked display metric form
//When inmpoerial radio is selected , hide the metric form and show the impoerial form.

//PSEUDOCODE 
//**********
//Add query selector for Radio section
//Use event target to execute form when clicked on impoerial form 
//use the change event type
//Display the impoerial form when selected

//DIVIDE AND CONQUER

//Toggle between Radio Buttons
function radioSwitch(e) {
    if (e.target.parentElement.classList.contains('imperialRadio')) {
        metric.classList.add('hidden');
        imperial.classList.remove('hidden');
    }
    else {
        metric.classList.remove('hidden');
        imperial.classList.add('hidden');
    }
}

//Metric Form Calculation

//Imperial Form Calculation


//add event Listeners
radioSection.addEventListener('change', radioSwitch);