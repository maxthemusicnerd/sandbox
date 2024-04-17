/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let per_day_cost = 35;
let num_days_selected = 0;

let full = document.getElementById("full");
let half = document.getElementById("half");

let calculated_cost = document.getElementById("calculated-cost");
let clear_button = document.getElementById("clear-button");

let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday= document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let button;
let days_of_week = [monday, tuesday, wednesday, thursday, friday]

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



function apply_clicked(button) {
    button.classList.toggle("clicked");
    calculate();
}


monday.addEventListener("click", function() {
    apply_clicked(monday)
})

tuesday.addEventListener("click", function() {
    apply_clicked(tuesday)
})

wednesday.addEventListener("click", function() {
    apply_clicked(wednesday)
})

thursday.addEventListener("click", function() {
    apply_clicked(thursday)
})

friday.addEventListener("click", function() {
    apply_clicked(friday)
})


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener("click", function() {
    for (let i = 0; i < days_of_week.length; i++) {
        if (days_of_week[i].classList.contains("clicked")) {
            days_of_week[i].classList.remove("clicked");
        }
        calculated_cost = 0;
        num_days_selected = 0;
        calculate()
    }
})




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", function() {
    half.classList.add("clicked");
    full.classList.remove("clicked");
    per_day_cost = 20;
    calculate();
})



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", function() {
    full.classList.add("clicked");
    half.classList.remove("clicked");
    per_day_cost = 35;
    calculate();
})


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    num_days_selected = 0;
    for (let i = 0; i < days_of_week.length; i++) {
        if (days_of_week[i].classList.contains("clicked")) {
            num_days_selected += 1;
        }
        console.log(num_days_selected, per_day_cost);
        calculated_cost = num_days_selected * per_day_cost;
        document.getElementById("calculated-cost").innerHTML = calculated_cost;
    }
}
