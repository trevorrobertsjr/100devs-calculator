
// an array for inputs. As each button is clicked append to array. When = is hit, complete the equation.
// stretch goal: every time an operator is clicked, show the intermediate value.


// document.getElementsByName("td").addEventListener("click", displayCalculation);
// document.querySelector("td").addEventListener("click", displayCalculation);

// document.querySelectorAll("td").forEach(e => e.addEventListener("click", displayCalculation))

// function displayCalculation() {
//     alert("button clicked!");

// }

// anonymous function used so that I can specify a function with a parameter.
// event listeners do not allow for parameters.
document.querySelectorAll("td").forEach(e => e.addEventListener("click", () => { displayCalculation(e.innerText) }))

function displayCalculation(input) {
    alert(`${input}`);

}