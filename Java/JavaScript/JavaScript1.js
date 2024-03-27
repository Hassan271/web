// Function3

function fun3() {
  document.getElementById("id7").innerHTML = "Statement Changed";
}

//
document.getElementById("id8").innerHTML = 5 + 7;

// Statements----------------------------------------

let x, y, z;
x = 5;
y = 6;
z = x + y;

document.getElementById("id9").innerHTML = "The value of z is = " + z;

function fun3() {
  document.getElementById("id11").innerHTML = "Hassan";
  document.getElementById("id12").innerHTML = "Zain";
}

// Maths----------------------------------------

// let x = 5;
document.getElementById("id16").innerHTML = Math.pow(x, 2);

// Strings -------------------------------------------------------------

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("id17").innerHTML =
  "The Length of the String = " + text.length;

// slice
let text2 = "part1, part2, part3";
let part = text2.slice(7, 13);
document.getElementById("id18").innerHTML = part;

// substring
let str = "part1, part2, part3";
document.getElementById("id19").innerHTML =
  "str.substring(7, 13)  is   part1, part2, part3 = " + str.substring(7, 13);

// replace function fun4
function fun4() {
  let text3 = document.getElementById("id20").innerHTML;
  document.getElementById("id20").innerHTML =
    "microsoft replaced by " + text3.replace(/MICROSOFT/i, "google");
}

// Replace all
function fun5() {
  let text4 = "I love Dogs. Dogs are very easy to love. Dogs are very popular.";
  text4 = text4.replaceAll("Dogs", "Cats");

  document.getElementById("id21").innerHTML = text4;
}

// Upper/Lower case fun5
function fun6() {
  let text5 = document.getElementById("id22").innerHTML;
  document.getElementById("id22").innerHTML = text5.toLocaleUpperCase();
}

// Search of
function fun6() {
  let text5 = "The quick brown fox jumps over a lazy dog.";

  document.getElementById("id23").innerHTML =
    "Lazy word is at positioin = " + text5.search(/lazy/);
}

// Match ALL
let text6 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text6.matchAll(/Cats/gi);

document.getElementById("id24").innerHTML =
  "How many times a word Cats appears = " + Array.from(iterator);

//  Adding ++ Two Numbers
let x1 = 100;
let y1 = 10;
let z1 = x1 + y1;
document.getElementById("id25").innerHTML = "100 + 10 = " + z1;

// Arrays
const cars = ["Suzuki", "Honda", "Core"];
document.getElementById("id26").innerHTML = "How may cars i have = " + cars;

function fun7() {
  let cars1 = document.getElementById("id27").innerHTML;
  document.getElementById("id27").innerHTML = "How may cars i have = " + cars;
}

// Loop Array
function fun8(params) {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fLen = fruits.length;

  let text7 = "<ul>";
  for (let i = 0; i < fLen; i++) {
    text7 += "<li>" + fruits[i] + "</li>";
  }
  text7 += "</ul>";

  document.getElementById("id28").innerHTML = text7;
}

// joining arrys
function fun10() {
  const a1 = ["A", "B"];
  const a2 = ["C", "D", "E"];
  const a3 = ["F", "G"];

  const arr1 = a1.concat(a2, a3);

  document.getElementById("id30").innerHTML = "joining of Arrays = " + arr1;
}

//   Min

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("id31").innerHTML = fun11(points);

function fun11(arr2) {
  let len = arr2.length;
  let min = Infinity;
  while (len--) {
    if (arr2[len] < min) {
      min = arr2[len];
    }
  }
  return min;
}

// Sort----------------------------
const alpha = [
  { type: "a", year: 2001 },
  { type: "b", year: 2002 },
  { type: "c", year: 2003 },
];

displayAlpha();

function fun12() {
  alpha.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayAlpha();
}

function displayAlpha() {
  document.getElementById("id32").innerHTML =
    alpha[0].type +
    " " +
    alpha[0].year +
    "<br>" +
    alpha[1].type +
    " " +
    alpha[1].year +
    "<br>" +
    alpha[2].type +
    " " +
    alpha[2].year;
}

// Sort Literals
function fun13() {
  const num = [45, 4, 9, 16, 25];

  let txt = "";
  num.forEach(fun13);
  document.getElementById("id33").innerHTML = txt;

  function fun13(value, index, array) {
    txt += value + "<br>";
  }
}

// Sum Array

// function fun14() {
//   const num2 = [45, 5, 10, 20, 15];

//   let sum1 = num2.reduce(fun14, 100);
//   document.getElementById("id34").innerHTML = "This is SUM = " + sum1;

//   function fun14(total, value) {
//     return total + value;
//   }
// }

program;
const num2 = [45, 5, 10, 20, 15];

let sum1 = num2.reduce(fun14, 100);
document.getElementById("id34").innerHTML = "This is SUM = " + sum1;

function fun14(total, value) {
  return total + value;
}

// ------------------------------------------------------------------------------------------------------------
var d1 = new Date();
document.getElementById("id35").innerHTML = d1;
