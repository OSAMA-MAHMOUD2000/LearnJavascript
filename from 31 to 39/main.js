/**
 * comparison operators
 *  == Equal (checks for values)
 *  != not equal (checks for values)
 * 
 *  === identical (checks for values and datatype as well)
 *  !== not identical (checks for values and datatype as well)
 * 
 *  > larger than 
 *  >= larger than or equal
 * 
 *  < smaller than 
 *  <= smaller than or equal
 */
console.log(10 == "10");
console.log(-100 == "-100");
console.log(10 != "10");

console.log(10 === "10");
console.log(10 !== "10");
console.log(10 !== 10);

console.log(10 > 20);
console.log(10 > 10);
console.log(10 <= 10);

console.log("Osama" == "Ahmad");// false, try to make it true without changing the operator and the values
console.log("Osama" !== "Ahmad");
console.log(typeof "Osama" == typeof "Ahmad");



/**
 * conditional (ternary) operator
 */

let theName = "Osama";
let theGender = "Male";
let theAge = 22;

if (theGender === "Male") {
    console.log("Mr.")
} else {
    console.log("Mrs.")
}

// condition ? if true : if false 

theGender === "Male" ? console.log("Mr.") : console.log("Mrs");

let result = theGender === "Male" ? "Mr." : "Mrs";

document.write(result);


theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 to 60") : theAge > 60 ? console.log(60) : console.log("unknown");




/**
 * Logical Or || 
 * - Null + undefined + any falsy value 
 * Nullish coalescing operator ??
 * - Null + undefined 
 */

let price= 0;
console.log(`The price is ${price || 2000}`);
console.log(`The price is ${price ?? 2000}`);


console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(false))


/**
 * challenge
 */



let st= "Elzero Web School";
if((st.length*2).toString() === "34"){
    console.log("good")
}

if (st.toLowerCase().search("W") !=="w"){
    console.log("good2")
}

if( st.length !== "string"){
    console.log("good3")
}

if (typeof st.length ==="number"){
    console.log("good4")
}

if((st.slice(0,6)).repeat(2)==="ElzeroElzero"){
    console.log("good5")
}
console.log((st.slice(0,6)).repeat(2))