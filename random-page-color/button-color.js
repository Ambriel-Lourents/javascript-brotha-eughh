

// create a variable "theButton" and store the button inside the variable 
const theButton = document.querySelector("button");

// then make a function that generates a random decimal number
//and floors the number to a whole number
const rColor = function(number) {
    return Math.floor(Math.random() * (number + 1));
}

// make an event listener that listens to the event that occurred when
// the button is clicked
theButton.addEventListener("click", function(){
    const bChange = `rgb(${rColor(255)}, ${rColor(255)}, ${rColor(255)})`

    document.body.style.backgroundColor = bChange;
})