// Variable Declaration
const one = document.querySelector(".one");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const input = document.querySelector(".text");
const generate = document.querySelector(".submit");
const chart = document.querySelector(".chart");
const fib = [];

// Fibonacci function
function fibonacci(n) {
  let a=0, b=1, temp;
  fib.length = 0;
  for (let i=1; i <= n; i++) {
    fib.push(a);
    temp = a + b;
    a = b;
    b = temp; 
  }
  return fib;
}

// When number button is clicked
one.addEventListener("click", () => {
  input.value = 1;
});

five.addEventListener("click", () => {
  input.value = 5;
});

ten.addEventListener("click", () => {
  input.value = 10;
});

// Generate button click
generate.addEventListener("click", () => {

  const value = input.value;
  const fib = fibonacci(value);

  // reset chart elements
  chart.innerHTML = "";

  // create element
  for (let i=0; i < fib.length; i++) {
    const element = document.createElement("div");
    element.classList.add("ele");
    element.classList.add("ele-add");
    // element.innerText = fib[i];
    element.setAttribute("style", `height:${fib[i]/fib[fib.length-1]*100}%; width:${100/fib.length}%`);
    chart.appendChild(element);

    const fib_ele = document.createElement("p");
    fib_ele.classList.add("fib-ele");
    fib_ele.innerHTML = fib[i];
    element.appendChild(fib_ele);
  }

});