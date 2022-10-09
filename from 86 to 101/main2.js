/**
 * DOM [Get / Set elements contents and attributes]
 * innerHTML
 * textContext
 * change attributes directly
 * change attributes with methods
 * -- getAttributes
 * -- setAttributes 
 * 
 * search
 * - innerHTML
 */

let myElement= document.querySelector(".js")

console.log(myElement.innerHTML)
console.log(myElement.textContent)

myElement.innerHTML=" Text from <span>Main.js</span> file";
myElement.textContent="Text from <span>Main.js</span> file"

myElement.innerHTML = "Text from <span>Main.js</span> file";
myElement.textContent = "Text from <span>Main.js</span> file";

document.images[0].src = "https://google.com"
document.images[0].alt = "alternate"
document.images[0].title="picture"
document.images[0].id="pic"
document.images[0].className="img"

let myLink=document.querySelector(".link");
console.log(myLink.getAttribute("class"))
console.log(myLink.getAttribute("href"))

myLink.setAttribute("href","https://twitter.com")
myLink.setAttribute("title","twitter")