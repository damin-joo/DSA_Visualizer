// Variables --------------------------------
const bubble = document.querySelector(".bub");
const selection = document.querySelector(".sel");
const insertion = document.querySelector(".ins");
const quick = document.querySelector(".qui");
const counting = document.querySelector(".cou");
const radix = document.querySelector(".rad");
const merge = document.querySelector(".mer");

const charts = document.querySelector(".chart");
const input = document.querySelector(".num");
const sample_btn = document.querySelector(".sample");
const add_btn = document.querySelector(".add");
const sort_btn = document.querySelector(".sort");
const clr_btn = document.querySelector(".clr");

const temp = [];
const sorted = [];

// Functions --------------------------------
function swapDoms(first, second) {
  // const first = document.getElementById(first);
  // const second = document.getElementById(second);
  const parent = first.parentNode;
  
  // If they are adjacent, this works directly:
  if (first.nextElementSibling === second) {
    parent.insertBefore(second, first);
  } else {
    // For non-adjacent nodes, insert a temporary placeholder
    const placeholder = document.createElement('div');
    parent.replaceChild(placeholder, first);
    parent.replaceChild(first, second);
    parent.replaceChild(second, placeholder);
  }
}

function switchEle(firstEl, secondEl, duration = 1000) {
  const first = document.getElementById(firstEl);
  const second = document.getElementById(secondEl);

  console.log('Switching elements:', firstEl, secondEl);

  first.style.backgroundColor = "red";
  second.style.backgroundColor = "red";

  const rect1 = first.getBoundingClientRect();
  const rect2 = second.getBoundingClientRect();

  const deltaX = rect2.left - rect1.left;

  first.style.transition = `transform ${duration}ms ease`;
  second.style.transition = `transform ${duration}ms ease`;

  first.style.transform = `translateX(${deltaX}px)`;
  second.style.transform = `translateX(${-deltaX}px)`;

  function resetStyles() {

    swapDoms(first, second);

    first.style.transform = "";
    second.style.transform = "";

    first.style.transition = "";
    second.style.transition = "";

    first.style.backgroundColor = "white";
    second.style.backgroundColor = "white";

    first.removeEventListener("transitionend", resetStyles);
  }
  console.log(first.getBoundingClientRect(), second.getBoundingClientRect())
  first.addEventListener("transitionend", resetStyles);
}

// select two and switch when right < left
function bubbleSort() {
  const dup = sorted.slice(0);
  console.log("Before: ", sorted);

  let delay = 0;

  for (let j=0; j < dup.length-1; j++) {
    for (let i=0; i < dup.length-j-1; i++) {
      if (Number(dup[i][0]) > Number(dup[i + 1][0])) {
        const a = dup[i][1];
        const b = dup[i + 1][1];
        console.log("Swapping: ", a, b);


        setTimeout(() => {
          switchEle(a, b, 1000);
        }, delay);

        delay += 1200;

        [dup[i], dup[i + 1]] = [dup[i + 1], dup[i]];
      }
    }
  }
  setTimeout(() => {
    console.log("Sorted:", dup);
  }, delay);
}

// select min and switch with first
function selectionSort() {
  const dup = sorted.slice(0);
  console.log("Before: ", sorted);

  let delay = 0;

  for (let j = 0; j < dup.length - 1; j++) {
    let min_index = j;
    for (let i = j + 1; i < dup.length; i++) {
      if (Number(dup[i][0]) < Number(dup[min_index][0])) {
        min_index = i;
      }
    }
    if (min_index === j) continue;
    const a = dup[j][1];
    const b = dup[min_index][1];

    setTimeout(() => {
      switchEle(a, b, 1000);
    }, delay);

    delay += 1200;

    [dup[j], dup[min_index]] = [dup[min_index], dup[j]];
  }
  setTimeout(() => {
    console.log("Sorted:", dup);
  }, delay);
}

function insertionSort() {

}

function quickSort() {

}

function countingSort() {

}

function radixSort() {

}

function mergeSort() {

}


function addElement(sample) {
  let value = Number(input.value);
  if (sample != null) {
    value = Number(sample);
  }
  const temp_array = [];

  if (isNaN(value)) return;

  temp.push(value);
  temp_array.push(value);

  // create bars
  const element = document.createElement("div");
  element.classList.add("ele");
  element.id = temp.length;
  charts.appendChild(element);

  temp_array.push(element.id);

  const maxVal = Math.max(...temp);
  const eles = document.querySelectorAll(".ele");

  eles.forEach((ele, index) => {
    const eleValue = parseFloat(ele.innerText) || value;
    ele.style.height = `${(eleValue / maxVal) * 100 + 0.1}%`;
    ele.style.width = `${100 / temp.length}%`;
  });

  // write number
  const ele_txt = document.createElement("p");
  ele_txt.classList.add("ele-text");
  ele_txt.innerHTML = value;
  element.appendChild(ele_txt);

  // clear input
  input.value = ""
  sorted.push(temp_array);

  console.log("temp_initinal: ", temp);
  console.log("Sorted_initial: ", sorted);
}

// Event Listener ----------------------------
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value != "" && input.value > 0) {
    addElement();
  }
});

add_btn.addEventListener("click", () => {
  if (input.value != "" && input.value > 0) {
    addElement();
  }
});

sort_btn.addEventListener("click", () => {
  const sort_type = document.querySelector('input[name="sort"]:checked').id;
  switch(sort_type) {
    case 'bub':
      bubbleSort();
      break;
    case 'sel':
      selectionSort();
      break;
    case 'ins':
      insertionSort();
      break;
    case 'qui':
      quickSort();
      break;
    case 'cou':
      countingSort();
      break;
    case 'rad':
      radixSort();
      break;
    case 'mer':
      mergeSort();
      break;
  }
});

clr_btn.addEventListener("click", () => {
  temp.length = 0
  sorted.length = 0
  charts.textContent = '';
});

sample_btn.addEventListener("click", () => {
  const sample = [3, 2, 1, 5, 4];
  sample.forEach((ele) => {
    addElement(ele);
  });
});

