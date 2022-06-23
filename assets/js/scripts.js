console.log("Hello World!")

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function Increment() {
    currentNumber = currentNumber + 1;
    if (currentNumber > 0 || currentNumber == 0){
        currentNumberWrapper.innerHTML = currentNumber;

        if (currentNumber == 0) {
            currentNumberWrapper.style.color = "rgb(180, 222, 236)";
        } else {
            currentNumberWrapper.style.color = "lawngreen";
        }
    } else {
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function Decrement() {
    currentNumber -= 1;
    if (currentNumber < 0 || currentNumber == 0){
        currentNumberWrapper.innerHTML = currentNumber;

        if (currentNumber == 0 ) {
            currentNumberWrapper.style.color = "rgb(180, 222, 236)";
        } else {
            currentNumberWrapper.style.color = "crimson";
        }

    } else {
        currentNumberWrapper.innerHTML = currentNumber;
    }
}