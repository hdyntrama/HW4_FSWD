let randomArr = [];
let arrayGanjil = [];
let arrayGenap = [];
let i;

for (i = 0; i < 100; i++) {
  const arrays = (Math.random() * 50 + 1) | 0;
  randomArr.push(arrays);
}

console.log("Random array:", randomArr);

for (i = 0; i < randomArr.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(randomArr[i]);
  } else {
    arrayGanjil.push(randomArr[i]);
  }
}

console.log("arrayGanjil:", arrayGanjil);
console.log("arrayGenap:", arrayGenap);

function getMin(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
}

function getMax(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
}

function getTotalArray(arr, val = 0) {
  for (i = 0; i < arr.length; i++) {
    val += arr[i];
  }
  return val;
}

function getRataRataArray(arr, sum, val = 0) {
  val = sum / arr.length;
  return val;
}

/* get Ganjil */
const minArrayGanjil = getMin(arrayGanjil);
const maxArrayGanjil = getMax(arrayGanjil);
const totalArrayGanjil = getTotalArray(arrayGanjil);
const rataRataArrayGanjil = getRataRataArray(arrayGanjil, totalArrayGanjil);

/* get Genap */
const minArrayGenap = getMin(arrayGenap);
const maxArrayGenap = getMax(arrayGenap);
const totalArrayGenap = getTotalArray(arrayGenap);
const rataRataArrayGenap = getRataRataArray(arrayGenap, totalArrayGenap);

/* compare */
const compareMinArray =
  minArrayGanjil === minArrayGenap
    ? "Min Ganjil dan Min Genap memiliki nilai sama"
    : minArrayGanjil > minArrayGenap
    ? "Min lebih besar array Ganjil"
    : "Min lebih besar array Genap";

const compareMaxArray =
  maxArrayGanjil === maxArrayGenap
    ? "Max Ganjil dan Max Genap memiliki nilai sama"
    : maxArrayGanjil > maxArrayGenap
    ? "Max lebih besar array Ganjil"
    : "Max lebih besar array Genap";

const compareTotal =
  totalArrayGanjil === totalArrayGenap
    ? "Total array Genap dan Ganjil memiliki nilai sama"
    : totalArrayGanjil > totalArrayGenap
    ? "Total lebih besar array Ganjil"
    : "Total lebih besar array Genap";

const compareRataRata =
  rataRataArrayGanjil === rataRataArrayGenap
    ? "Rata rata array Genap dan Ganjil memiliki nilai sama"
    : rataRataArrayGanjil > rataRataArrayGenap
    ? "Rata rata lebih besar array Ganjil"
    : "Rata rata lebih besar array Genap";

console.log("minArrayGanjil:", minArrayGanjil);
console.log("maxArrayGanjil:", maxArrayGanjil);
console.log("totalArrayGanjil:", totalArrayGanjil);
console.log("rataRataArrayGanjil:", rataRataArrayGanjil);

console.log("minArrayGenap:", minArrayGenap);
console.log("maxArrayGenap:", maxArrayGenap);
console.log("totalArrayGenap:", totalArrayGenap);
console.log("rataRataArrayGenap:", rataRataArrayGenap);

console.log(compareMinArray);
console.log(compareMaxArray);
console.log(compareTotal);
console.log(compareRataRata);