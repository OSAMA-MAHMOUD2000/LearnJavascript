/**
 * BOM [Browser object model]
 * - introduction
 * -- window object is the browser window
 * -- window contains the document object
 * -- all global variables and objects and functions are member of window object
 * ---test document and console .
 * - what can we do with the window object?
 * -- open window
 * -- close window
 * -- move window
 * -- resize window
 * -- print window
 * -- run code after period of time once or more
 * -- fully control the url
 * -- save data inside browser to use later
 */

window.document.title = "hello js";

/**
 * BOM
 * - alert (message) => need no response, only ok available
 * - confirm (message) => need response and return a boolean
 * - prompt (message , default message) => collect data
 */
// window.alert("testing")
// this.alert("test")
// alert("tested")

// let confirmMsg = confirm("Are you sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("item deleted");
// } else {
//   console.log("item not deleted");
// }

// let promptMsg = prompt("Good day to you?", "Write day with 3 characters only");
// console.log(promptMsg);

/**
 * BOM [Browser object model]
 * -setTimeout(function, timeout, addition)
 * -clearTimeout(identifier)
 */

setTimeout(function () {
  console.log(`Msg`);
}, 3000);

// setTimeout(sayMsg,3000);
// function sayMsg() {
//           console.log("I am message ")

// }

// setTimeout(sayMsg, 3000, "Ösama", 22); // for passing parameters to a function inside setTimeout function we have to put them after the timeout parameter not inside the function
// function sayMsg(user, age) {
//   console.log(`I am message for ${user} his age is ${age}`);
// }

let counter = setTimeout(sayMsg, 3000);
function sayMsg() {
  console.log("I am message ");
}
let btn = document.querySelector("button");
btn.onclick = function () {
  clearTimeout(counter);
};

/**
 * BOM [Browser object model]
 * -setInterval(function, milliseconds,additional params)
 * -clearInterval(identifier)
 */
// setInterval(sayMsg, 3000);
// function sayMsg() {
//   console.log("I am set interval message ");
// }
let div=document.querySelector("div")
function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter2);
  }
}
let counter2 = setInterval(countdown, 1000);


/**
 * BOM [Browser object model]
 * - location object
 * -- href Get /set [url || hash || file || mail] .
 * -- host .
 * -- hash .
 * -- protocol .
 * -- reload()
 * -- replace()
 * -- assign() 
 */
console.log(location)
console.log(location.href)
//location.href ="https://google.com"
location.href="#sec02";

console.log(location.host)
console.log(location.hostname);


/**
 * BOM [Browser object model]
 * - open (URL [opt], window name or target attr [opt], window features[opt], history replace [opt]) 
 * - close()
 * -window features 
 * --width [num]
 * --height [num]
 * --left [num]
 * --top [num]
 * 
 * 
 * search 
 * - Window.open window features
 * 
 */
// setTimeout(function(){
//   window.open("https://google.com","_blank","width=400","height=400","top=100")
// },2000)

/**
 * BOM [Browser object model]
 * History API
 * - properties 
 * --length .
 * - methods
 * --back()
 * --forward()
 * --go(delta)=>position in history .
 * 
 * search [for advanced knowledge ]
 * - pushState() + replaceState()
 */
console.log(history)

/**
 * BOM [Browser object model]
 * stop()
 * print()
 * focus()
 * scrollTo(x,y || options)
 * scroll(x,y || options) it is not supported by safari browser
 * scrollBy(x,y || options)
 */

window.scrollTo({
  left: 500,
  top:200,
  behavior:"smooth"
})

/**
 * BOM [Browser object model]
 * Local storage .
 * --setItem .
 * --getItem
 * --removeItem
 * --clear .
 * --key .
 * 
 * 
 * info 
 * - no expiration time .
 * - HTTP and HTTPS.
 * - Private tab
 */


//set 
window.localStorage.setItem("color","#F00")
window.localStorage.fontWeight="bold"
window.localStorage["fontSize"]="20px"

//get 
console.log(window.localStorage.getItem("color"))
console.log(window.localStorage.fontSize)
console.log(window.localStorage["fontWeight"])


// //remove only one .
// window.localStorage.removeItem("color")

// //remove all (clear all) 
// window.localStorage.clear()

//get key .
console.log(window.localStorage.getKey(0))

// set color in page 
document.body.style.backgroundColor=window.localStorage.getItem("color")

console.log(window.localStorage)
console.log(typeof window.localStorage);


