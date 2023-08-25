const radioSection = document.querySelector('#radio-section');
const metric = document.querySelector('#Metric-form');
const imperial = document.querySelector('#Imperial-form');
const category = document.querySelector('#category')



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
    const bmi = document.querySelector('#BMI');
    const h1 = category.querySelector('#one');
    const h2 = category.querySelector('#two');

    //Covert the input value to integer
    const Heightvalue = heightInput.value;
    const weightValue = weightInput.value;
    HeightString = parseInt(Heightvalue);
    weightString = parseInt(weightValue);
    //use the formula to calculate the BMI
    const BMI = ((weightString / HeightString / HeightString) * 10000).toFixed(2);
    bmi.innerHTML = BMI;

    //Category
    if (BMI <18.5) {
        h1.innerText = 'Underweight'
        
    }
    if (BMI >=18.5) {
        h1.innerText = 'Normal weight';
    }
    if (BMI >=25) {
        h1.innerText = 'Overweight';
    }
    if (BMI >=30) {
        h1.innerText = 'Obeese';
    }
    
}



//Imperial Form Calculation


//add event Listeners
radioSection.addEventListener('change', radioSwitch);
metric.addEventListener('input', metricField);
