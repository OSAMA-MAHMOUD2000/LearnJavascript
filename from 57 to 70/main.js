/**
 * Function
 * what is function?
 * user-defined vs built-in function
 * syntax + basic usage example
 * example from real world
 * parameter + argument
 * practical example
 */

function sayHello(userName) {
  console.log(`hello ${userName}`);
}
sayHello("Osama");

function generate(start, end) {
  for (let i = start; i < end; i++) {
    if (i === 15) {
      return `interrupting`;
    }
    console.log(i);
  }
}
result = generate(1, 20);
console.log(result);

//note : any line has written after return wil be unreachable

/**
 * Function
 * - default function parameters
 * - function parameters default [undefined]
 * - old strategies [condition + logical or]
 * - ES6 method
 */

function sayHi(userName = "Unknown", age = "unknown") {
  // if (age == undefined){
  //     age = "unknown";
  // }
  // age=age || "unknown"
  return `hi ${userName}, your age is ${age}`;
}
console.log(sayHi("Osama"));

/**
 * Function
 * rest parameters
 * allowed only once
 * must be last element
 * */

function calc(...numbers) {
  //console.log(Array.isArray(numbers))
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final result is ${result}`;
}
console.log(calc(20, 30, 40, 50, 60, 70, 80, 90));

/**
 * function advanced practice
 * - parameters
 * - default
 * - rest
 * - loop
 * - condition
 * - coded by Osama Mahmoud
 */

function showInfo(userName = "Un", age = "Un", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`);
  document.write(`<h2> Welcome, ${userName}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: ${rate}</p>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(",")}</p>`);

    } else {
      document.write(`<p>Skills: No skills</p>`);

    }
  } else {
    document.write(`<p>Skills are hidden</p>`)

  }
  document.write(`</div>`)
}

showInfo("Osama", 22, 100, "Yes", "Java", "JavaScript")




/**
 * Function 
 * -Anonymous Function
 * - Calling named function vs Anonymous function
 * - Argument to other function
 * - Task without name
 * - setTimeOut
 * 
 */

let calculator = function (num1, num2) {
  return num1 + num2;
}

console.log(calculator(2, 3));

function sayHello() {
  console.log("Hello Osama ");
}

document.getElementById("show").onclick = function () {
  console.log("show function ")
};


setTimeout(function () {
  console.log("Good")
}, 200);



/**
 * Function 
 * - function inside function
 * - return function 
 */

//example1
// function sayMessage (fName,lName){
//   let message=`Hello`

//   function concatMsg(){
//     message=`${message} ${fName} ${lName}`;

//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama","Mahmoud"))


//example 2
// function sayMessage(fName, lName) {
//   let message = `Hello`

//   function concatMsg() {
//     return`${message} ${fName} ${lName}`;
//   }

//   return concatMsg();;
// }

// console.log(sayMessage("Osama", "Mahmoud"))


//example 3
function sayMessage(fName, lName) {
  let message = `Hello`

  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`
    }
    return `${message} ${getFullName()}`;
  }

  return concatMsg();
}

console.log(sayMessage("Osama", "Mahmoud"))


/**
 * Function
 * - Arrow Function
 * -- regular vs arrow [Param + no param]
 * -- multiple lines
 */

// let print=function(){
//   return 10;
// }
//first form of arrow function
// let print=()=>{
//   return 10;
// }

//second form of arrow function
// let print = _ => {
//    return 10;
// }
//third form of arrow function
//let print = () =>  10;

//4th form of arrow function with arguments
//let print =(num)=>num;
//console.log(print(10));



/**
 * Scope
 * - Global and local scope
 */
var a = 1;
let b = 2;
function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - from local ${a}`);
  console.log(`Function - from local ${b}`);

}
console.log(` a from global ${a}`);
console.log(`b from global ${b}`);
showText()

/**
 * scope
 * - block scope [if, switch, for]
 */

var x = 10;
if (10 === 10) {
  var x = 50;
  //using var here, we will override the x value ,
  // to avoid that and create special variables in (if scope), 
  //we have to use let instead of var .
}

console.log(x)
if (10 === 10) {
  let x = 100;
  console.log(`from if scope ${x}`)
}
console.log(`from global${x}`)
//note: when we use any variable ,the compiler will check them in the current scope then the global scope


/**
 * scope
 *  - lexical scope
 * search
 * - execution context
 * - lexical environment
 */
//lexical scope is that if we have nested functions, we can access the child function variables from the parent function scope


function parent() {
  let a = 10;

  function child() {
    console.log(a)
    //console.log(`from child ${bb}`); output:Uncaught ReferenceError: bb is not defined
    function grand() {
      let bb = 100;
      console.log(`from grand ${a}`);
      console.log(`from grand ${bb}`);
    }
    grand()
  }
  child();
}
parent();



/**
 * Function arrow challenge
 */
//1- one statement in the function 
//2- convert to arrow function
//3- print the output [argument may change]
let names=function(...args) {
  return `String [${args.join("], [")}] => Done!`
}
//the desired output : 
//String [Osama], [Manaf], [Manar], [Manal], [Malak] => Done!
console.log(names("Osama","Manaf","Manar","Manal","Malak"))

let namesArrow = (...args) => `String [${args.join("], [")}] => Done!`
console.log(namesArrow("Osama", "Manaf", "Manar", "Manal", "Malak"))


let myNumbers=[20,50,10,60];
let cal=(one, two, ...nums)=> `${one + two +nums.shift()}`;
console.log(cal(myNumbers[0], myNumbers[1], myNumbers[2]))