/**
 * Number
 * - Double precision
 * - syntactic sugar "_"
 * - e
 * - **
 * - with decimal
 * - number + BigInt
 * -Number Min value
 * -Number Max value

*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10 );
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE+12115451231);



/**
 * Number Methods
 * - Two Dots to call a Methods
 * - toString()
 * - toFixed()
 * - parseInt()
 * - parseFloat()
 * - isInteger() [ES6]
 * - isNaN() [ES6]
 */

console.log((100).toString());
console.log(100..toString());
console.log(100.10.toString());
console.log(100.555555.toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt(" Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5000));
console.log(Number.isInteger(100));

console.log(Number.isNaN("osama"/20));


/**
 * Math Object 
 * - round()
 * - ceil()
 * - floor()
 * - max()
 * - min()
 * - pow()
 * - random()
 * - tranc() [ES6]
 */

console.log(Math.round(99.2));
console.log(Math.round(99.6));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.6));
console.log(Math.min(10,22,44,100,-10,5));
console.log(Math.max(10, 22, 44, 100, -10, 5)); 
console.log(Math.pow(2,4));
console.log(Math.random());
console.log(Math.trunc(99.4));



/**
 * Number challenge
 */

let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;

// find the smallest number in all variables and return integer
console.log(Number.parseInt(Math.min(a,b,c,d)))

// use variables a + d one time to get the needed output
console.log(a ** Math.trunc(d));


//get integer 2 from d variable with 4 Methods

console.log(Number.parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

//use variables b + d to get this values
console.log((66.67).toString());
console.log(Number("67"))


/**
 * String Methods
 * - access with Index
 * - access with charAt()
 * - length
 * - trim()
 * - toUpperCase()
 * - toLowerCase()
 * - chain Methods
 */

let theName="  Osama  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toLowerCase());
console.log(theName.toUpperCase());

console.log(theName.trim().charAt(2).toUpperCase())


/**
 * String challenge 
 */

let aa="Elzero Web School";

console.log("string challenge ");
//includes this methods in your solution
console.log(aa.slice(2,6));

// 8 H
console.log(aa.charAt(aa.indexOf("h")).repeat(8).toUpperCase())

// return array of [Elzero]
console.log(aa.split(" ",1));

//use only "substr" method + template literals in your solution
console.log(aa.substr(0,6),aa.substr(-6));

// solution must be dynamic and string may change 
console.log(aa.charAt(0).toLowerCase() +aa.slice(1,-1).toUpperCase()+aa.slice(-1).toLowerCase());