// window.alert();
// document.write('');
// console.log('');

//window.alert("clock in");
document.write("<h1>Osama Mahmoud</h1>");
console.log('hello from me ');



/*
console methods
    log
    error
    table

    web API
    Directive %c

*/

console.log("Log");
console.error("error");
console.table(["Osama", "Ähmed", "Manaf"]);
console.log("Hello %cOsama %cMahmoud", "color: red; font size:50px", "color: green; font size:50px");

/*
ES6
 */

var myName = "Osama Mahmoud";
console.log("Hello " + myName)
console.log(`Hello ${myName}`)


/*
Data Types
    string
    number
    array=> object
    object
    boolean
Typeof operator
*/

console.log(typeof "Osama");
console.log(typeof 5000);
console.log(typeof 5000.00);
console.log(typeof [10, 20, 30]);
console.log(typeof ['Os', 'Ah', 'Ma']);
console.log(typeof { name: 'Osama', age: 20, branch: "CSE" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


/*
Variables

*/
var user = "Osama";
console.log(user);

console.log(hello);
hello.innerHTML = "OSama";


/*
var, let, const 

var
    redeclare(yes)
    access before declare(undefined)
    variable scope drama(added to window object)
    block or function scope (var is function scoped)
let
    redeclare(no=> error)
    access before declare(error)
    variable scope drama()
    block or function scope (let is block-scoped.)
    It can be declared without initialization.	
const
    redeclare(no=> error)
    access before declare(error)
    variable scope drama()
    block or function scope 
    It cannot be declared without initialization.
*/
var a = 2;
var a = 4;
console.log(a);

let d = 3;
//let d=3;
console.log(d);


/*
string syntax + character escape sequences
\ Escape + line continue
\n new line
*/

console.log('Elzero web "school"');// double qoutes inside single qoutes are allowed
console.log("Elzero web 'school'");// single qoutes inside double qoutes are allowed
console.log('Elzero web \'school\'');// single qoutes inside single qoutes are allowed using \ before them
console.log("Elzero web \"school\"");// double qoutes inside double qoutes are allowed using \ before them
console.log("Elzero \\ web \"school\"");
console.log('Elzero\
 web \
 school');
console.log("Elzero\nweb\nschool");


/*
concatenation
*/
let A = "we love";
let b = "javaScript";

document.write(A + " " + b);
console.log(A + " " + b);
console.log(A, b);


//Templete literals(templete strings)

let aa = "we love";
let bb = "javaScript";
let c = "And";
let dd = "Programming";


console.log(aa + " " + bb + " " + c + " " + dd);
console.log(`${aa} ${bb} ${c} ${dd}`);

let title = "Osama Mahmoud";
let desc = "I am from Syria, studying in KIIT university";

let markUp = `
<div class="card">
<div class="chiled">
<h1>${title}</h1>
<p>${desc}</p>
</div>
</div>
`;

document.write(markUp);


/*
+ unary plus operator (return Number if its not number)
- unary negation operator (return Number if its not number + negates it )
testing on :
1- Normal number
2- string Number
3- string negative Number4- string text Number
4- float
5- hexadecimal numeral system=> 0xFF
7- null 
8- false
9- true


*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xFF);
console.log(+null);
console.log(+false);
console.log(+true)



console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xFF);
console.log(-null);
console.log(-false);
console.log(-true)



/**
 * type coercion (type casting)
 * +
 * -
 * "" -2
 * false - true
 */

let aaa = "10";
let bbb = 20;
let ccc = true;

console.log(aaa + bbb + ccc);
console.log(+aaa + bbb + ccc);
console.log(aaa + bbb);
console.log(+aaa + bbb);
console.log(Number(aaa) + bbb);
console.log(aaa - bbb);
console.log(bbb - aaa);
console.log("" - 2)
console.log(+"" - 2)
console.log(0 - 2)

console.log(false - true)
console.log(+false - +true)
console.log(bbb + ccc)


/**
 * assignement operators
 * 
 */

let f=10;
f=f+20;
f=f+70;
f+=100;//a=a+100
f -= 10;//a=a-100
f /= 2;//a=a/100
console.log(f)