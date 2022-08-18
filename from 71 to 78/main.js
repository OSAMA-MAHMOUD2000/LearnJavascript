/**
 * Higher order functions
 * --> is a function that accepts functions as parameters and / or returns a function
 *
 * -Map
 * --- method creates a new array
 * --- populated with the results of calling a provided function on every element in the calling array .
 *
 * syntax of map(callbackFunction(element, index, array){},thisArg)
 * - element => the current element being processed in the array
 * - index => the index of the current element being processed in the array
 * - array => the current array
 * notes:
 * - map returns a new array .
 *
 * examples
 * - anonymous function
 * - named function
 */

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNums = [];

for (let i = 0; i < myNums.length; i++) {
  newNums.push(myNums[i] + myNums[i]);
}
console.log(newNums);

// same idea with map
// let addSelf=myNums.map(function(element, index, array){
//     console.log(`Current element =>${element}`)
//     console.log(`current index => ${index}`)
//     console.log(`array => ${array}`)
//     console.log(`this=>${this}`)
//     return element+element;
// });
let addSelf = myNums.map((element) => element + element);

console.log(addSelf);

function addition(element) {
  return element + element;
}

let add = myNums.map(addition);

console.log(add);

/**
 * swap cases
 * inverted numbers .
 * ignore numbers.
 */

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(ign);

/**
 * Filter
 * --method creates a new array .
 * --with all elements that pass the test implemented by the provided functions.
 *
 * syntax filter(callbackFunction(element, index, array){}, thisArg)
 * - element => the current element being processed in the array
 * - index => the index of the current element being processed in the array
 * - array => the current array
 */

//get friends with names starts with A
let friends = ["Ahmad", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterFriends = friends.filter(function (el) {
  return el.startsWith("A");
});
console.log(filterFriends);

//get even numbers only
numbers = [11, 2, 20, 15, 33, 22];
let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);

//the map will perform action
//the filter will perform test and return the true elements

let addMap = numbers.map(function (ele) {
  return ele + ele;
});
console.log(addMap);

let addFilter = numbers.filter(function (ele) {
  return ele + ele;
});
console.log(addFilter);

/**
 * Filter
 * -filter longest word by number
 */
//filter words more than 4 characters
let sentence = "I love foood code too playing much";
let smallWords = sentence.split(" ").filter(function (ele) {
  return ele.length <= 4;
});
console.log(smallWords);

//ignore numbers .
let ignore = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(ignore);

//filter strings+ multiply
let mix = "A13BS2ZX";
let mixContents = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(mixContents);

/**
 * Reduce
 * -method executes a reducer function on each element of the array,
 * -resulting in a single output value
 *
 * syntax
 * reduce(callbackFunction(Accumulator,currentVal, current index, source array){},initialValue)
 * -Accumulator=> the accumulated value previously returned in the last invocation
 * current value=> the current element being processed in the array
 * index=> the index of the current element being processed in the array
 *          starts from index 0 if the initialValue is provided
 *          otherwise, it will stat from 1
 * array=> the current array
 */

let nums = [10, 20, 15, 30];
let addd = nums.reduce(function (acc, current, index, arr) {
  console.log(`acc => ${acc}`);
  console.log(`current element => ${current}`);
  console.log(`current element index => ${index}`);
  console.log(`the array => ${arr}`);
  console.log(`####`);
  return acc + current;
}, 5);
console.log(addd);

/**
 * - forEach
 * -- method executes a provided function once for each element
 *
 * - syntax forEach(callbackFunction (element, index, array ){},thisArg)
 * -- element => the current element being processed in the array
 * -- index => the index of the current element being processed in the array
 * -- array => the current array
 *
 * note:
 * doesn't return anything (undefined)
 * break will not break the loop .
 */
let allList = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allList.forEach(function (ele) {
  ele.onclick = function () {
    //remove active class from all elements
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //add active class to the element
    this.classList.add("active");
    // hide all divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/**
 * higher order functions challenges
 *
 * you can use
 * - ,
 * - _
 * - space
 * true =>1 => one time in the code only
 *
 * you can not use
 * -numbers
 * -letters
 *
 * - you must use [filter, map,reduce, your knowledge]
 * - order is not important .
 * - all in one chain
 */

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter(function (ele) {return isNaN(parseInt(ele));})
  .map(function (ele) {return ele.length>1?ele.split("")[0]:ele;})
  .map(function (ele) {return ele != "_" ? ele : " ";})
  .map(function (ele) {return ele != "Z"?ele:""}).join("");
console.log(solution);

let solution1 = myString
  .split("")
  .filter((char) => { return isNaN(char) && !char.includes(",") })
  .slice(1, 18)
  .map((char) => { return char === "_" ? " " : char })
  .reduce((acc, cur) => { return `${acc}${cur}` });

console.log(solution1);

let solution2 = myString
  .split(",")
  // remove number from array
  .filter((ele) => isNaN(parseInt(ele)))
  .map((ele1) => {
    return (
      ele1
        .split("")
        //set all 1+ arrays to 1
        .filter((x, index) => x[index])
        //return them back to 1 whole array
        .reduce((acc, index) => acc + index)
    );
  })
  // remove last element "Z", then make it 1 string
  .map((ele) => (ele === "_" ? " " : ele))
  .map((ele, index, arr) => {
    arr.length = arr.length--;
    return ele;
  })
  .join("");
console.log(solution2);