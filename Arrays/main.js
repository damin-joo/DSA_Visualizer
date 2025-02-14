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
const add_btn = document.querySelector(".add");

const sorted = []
const sort_pairs = []
const all_pairs = []


// Functions --------------------------------
function bubbleSort() {
  for (let j=0; j < sorted.length; j++) {
    for (let i=0; i < sorted.length-j-1; i++) {
      all_pairs.push([sorted[i], sorted[i+1]])
      if (sorted[i] > sorted[i+1]) {
        let temp = sorted[i];
        sort_pairs.push([sorted[i], sorted[i+1]]);

        sorted[i] = sorted[i+1];
        sorted[i+1] = temp;
      }
    }
  }
  console.log("to sort:", sorted);
  console.log("sort pairs", sort_pairs);
  console.log("all pairs", all_pairs);
  return sorted, sort_pairs, all_pairs;
}

function selectionSort() {

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

// Event Listener ----------------------------

bubble.addEventListener("click", () => {
  bubbleSort();
});

selection.addEventListener("click", () => {
  selectionSort();
});

insertion.addEventListener("click", () => {
  insertionSort();
});

quick.addEventListener("click", () => {
  quickSort();
});

counting.addEventListener("click", () => {
  countingSort();
});

radix.addEventListener("click", () => {
  radixSort();
});

merge.addEventListener("click", () => {
  mergeSort();
});

add_btn.addEventListener("click", () => {
  const value = input.value;
  if (isNaN(value)) return;

  sorted.push(value);

  // create bars
  const element = document.createElement("div");
  element.classList.add("ele");
  charts.appendChild(element);

  const maxVal = Math.max(...sorted);
  const eles = document.querySelectorAll(".ele");

  eles.forEach((ele, index) => {
    const eleValue = parseFloat(ele.innerText) || value;
    ele.style.height = `${(eleValue / maxVal) * 100}%`;
    ele.style.width = `${100 / sorted.length}%`;
  });

  // write number
  const ele_txt = document.createElement("p");
  ele_txt.classList.add("ele-text");
  ele_txt.innerHTML = value;
  element.appendChild(ele_txt);

  // clear input
  input.value = ""
});

