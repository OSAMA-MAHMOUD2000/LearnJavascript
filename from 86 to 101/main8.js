/**
 * DOM[events simulation]
 * - click
 * -focus
 * -blur
 */

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};

/**
 * DOM [class list]
 * - classlist
 * -- length
 * -- contains
 * -- item(index)
 * -- add
 * -- remove
 * -- toggle
 */

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("Osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.add("add-one", "add-two");
};
// element.onclick=function(){
//           element.classList.remove("add-one","add-two")
// }
element.onclick = function () {
  element.classList.toggle("add-one", "add-two");
};


/**
 * DOM [CSS]
 * 
 * - style 
 * - cssTest
 * - removeProperty(propertyName) [inline, stylesheet]
 * - setProperty(propertyName, value, priority)
 */


element.style.color="red";
element.style.fontWeight="bold";

element.style.cssText="front-weight: bold; color:green; opacity:0.9"


element.style.removeProperty("color")
element.style.setProperty("font-size","40px","important")

// document.CSSStyleSheet[0].rules[0].style.removeProperty("line-height");
// document.CSSStyleSheet[0].rules[0].style.setProperty("background-color", "red");
//the previous code is not working properly due to some deprecations


/**
 * DOM [Deal with elements]
 * - before [element || string]
 * - after [element || string]
 * - append [element || string]
 * - prepend [element || string]
 * - remove
 */


let createdP= document.getElementById("p")
element.before(createdP)
element.prepend(createdP)

//createdP.remove()

/**
 * DOM [traversing]
 * -nextSibling
 * -previousSibling
 * -nextElementSibling
 * -previousElementSibling
 * -parentElement
 */


let span= document.querySelector(".twoo");
console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(span.parentElement) 

span.onclick=function(){
          span.parentElement.remove();
}



/**
 * DOM [Cloning]
 * - cloneNode(deep)
 */

let myP=document.querySelector("p").cloneNode(true)
let myDiv=document.querySelector("my-div")

myP.id=`${myP.id}-cloned`;

myDiv.appendChild(myP)