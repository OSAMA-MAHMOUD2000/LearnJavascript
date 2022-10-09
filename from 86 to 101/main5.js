/**
 * DOM (Deal with children)
 * -children will bring only the elements
 * -childNodes will bring everything
 * -firstChild
 * -lastChild
 * -firstElementChild 
 * -lastElementChild
 */


let myElement=document.querySelector("div")


console.log(myElement)
console.log(myElement.children)
console.log(myElement.children[0])
console.log(myElement.childNodes)
console.log(myElement.childNodes[0])

console.log(myElement.firstChild)
console.log(myElement.lastChild)

console.log(myElement.firstElementChild)
console.log(myElement.lastElementChild)