/**
 * DOM (Document object model)
 * - what is DOM .
 * - DOM selectors
 * -- Find element by ID .
 * -- Find element by Tag name .
 * -- Find element by class name
 * -- Find element by CSS selectors
 * -- Find element by collection
 * ---title
 * ---body
 * ---images
 * ---forms
 * ---links
 */

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements);
console.log(myTagElements[1]);
console.log(myClassElements);
console.log(myClassElements[1]);
console.log(myQueryElement);
console.log(myQueryAllElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

