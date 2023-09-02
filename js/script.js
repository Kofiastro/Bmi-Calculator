const radioSection = document.querySelector('#radio-section');
const metric = document.querySelector('#Metric-form');
const imperial = document.querySelector('#Imperial-form');
const category = document.querySelector('#category');
const bmi = document.querySelector('#BMI');




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
//Formulae [weight (kg) / height (cm) / height (cm)] x 10,000.
//Target the Height input field in kg.
//Target the Weight field in cm.
//Target the result.
//Target the category of BMI and Description

function metricField(e) {
    //Metric Selector Weight and input fields
    const heightInput = metric.querySelector('#MetricHeight');
    const weightInput = metric.querySelector('#MetricWeight');
    const h1 = category.querySelector('#one');
    const h2 = category.querySelector('#two');

    //Covert the input value to integer
    const Heightvalue = heightInput.value;
    const weightValue = weightInput.value;
    const HeightString = parseFloat(Heightvalue);
    const weightString = parseFloat(weightValue);
    //use the formula to calculate the BMI
    const BMI = ((weightString / HeightString / HeightString) * 10000).toFixed(2);
    bmi.innerHTML = BMI;

    //Category
    if (BMI < 18.5) {
        h1.innerText = 'Underweight'
        h2.innerText = 'less than 18.5'
    }
    else if (BMI >= 18.5) {
        h1.innerText = 'Normal weight';
        h2.innerText = 'between 18.5-24.9'

    }
    else if (BMI >= 25) {
        h1.innerText = 'Overweight';
        h2.innerText = 'between 25-29.9'

    }
    else if (BMI >= 30) {
        h1.innerText = 'Obeese';
        h2.innerText = 'between 30 or Greater'

    }
    else {
        h1.innerText = '_ _';
        h2.innerText = 'Null'
    }

}


//Imperial Form Calculation
//First convert Feet to inches
//Conver St(stone) to lbs(pounds)
//Formulae Feet x 12
//Formulae St x 14

function Imperial() {
    //BMI Blue container
    const h1 = category.querySelector('#one');
    const h2 = category.querySelector('#two');
    //Imperial Selector Weight and Height input fields
    const heightInputa = imperial.querySelector('#FirstH');
    const heightInputb = imperial.querySelector('#SecondH');
    const weightInputa = imperial.querySelector('#Wheight');
    const weightInputb = imperial.querySelector('#Wheight1');
    //convert input items to integer
    const heightStringa = parseFloat(heightInputa.value);
    const heightStringb = parseFloat(heightInputb.value);
    const weightStringa = parseFloat(weightInputa.value);
    const weightStringb = parseFloat(weightInputb.value);
    //convert each inputed item to match it's corresponding unit
    //Height Target
    const heightConversiona = (heightStringa * 12).toFixed(2);
    heightInputb.setAttribute("value", heightConversiona);
    //Weight Target
    const weightConversiona = (weightStringa * 14).toFixed(2);
    weightInputb.setAttribute("value", weightConversiona);
    console.log(heightConversiona);
    //BMI Formulae
    const imperialBMI = (weightConversiona / (heightConversiona ** 2) * 703).toFixed(2);
    bmi.innerHTML = imperialBMI;

    //Category
    if (imperialBMI < 18.5) {
        h1.innerText = 'Underweight'
        h2.innerText = 'less than 18.5'
    }
    else if (imperialBMI >= 18.5) {
        h1.innerText = 'Normal weight';
        h2.innerText = 'between 18.5-24.9'

    }
    else if (imperialBMI >= 25) {
        h1.innerText = 'Overweight';
        h2.innerText = 'between 25-29.9'

    }
    else if (imperialBMI >= 30) {
        h1.innerText = 'Obeese';
        h2.innerText = 'between 30 or Greater'

    }
    else {
        h1.innerText = '_ _';
        h2.innerText = 'Null'
    }
}

//add event Listeners
radioSection.addEventListener('change', radioSwitch);
metric.addEventListener('input', metricField);
imperial.addEventListener('input', Imperial);
