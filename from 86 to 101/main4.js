/**
 * DOM [create element] .
 * - createElement
 * - createComment
 * - createTextNode
 * - CreateAttribute
 * - appendChild
 */

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product one");
let myComment = document.createComment("this is div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

//append comment to element
myElement.appendChild(myComment);

//append text to element
myElement.appendChild(myText);
document.body.appendChild(myElement);

// let myProduct = document.createElement("div");
// let myHeading = document.createElement("h3");
// let myHeadText = document.createTextNode("product title");
// let myParagraph = document.createElement("p");
// let myParagraphText = document.createTextNode("product description");
// myParagraph.appendChild(myParagraphText);
// myHeading.appendChild(myHeadText);
// myProduct.className = "product";
// myProduct.appendChild(myParagraph);
// myProduct.appendChild(myHeading);

// document.body.appendChild(myProduct);

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("product title");
let myParagraphText = document.createTextNode("product description");

//add heading text
myHeading.appendChild(myHeadingText);

//add heading to main element
myMainElement.appendChild(myHeading);

//add paragraph text
myParagraph.appendChild(myParagraphText);

//add paragraph to main element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);
