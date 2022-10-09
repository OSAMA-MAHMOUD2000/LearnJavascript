/**
 * DOM [add event listener]
 * - addEventListener
 * - use without on
 * - attach multiple on
 * - error test
 *
 *
 * search
 * - capture & bubbling javascript
 * - removeEventListener
 */

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message from onclick 1");
// }

// function two() {
//   console.log("Message from onclick 2");
// }

// myP.addEventListener("click", function () {
//   console.log("Message from onclick 1 event");
// });
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// // myP.addEventListener("click","string")//error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned=document.querySelector(".clone");
// cloned.onclick=function(){
//           console.log("I am cloned")
// }

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am cloned");
  }
});

// using addEventListener() you can add event for non-existing classes so the event will be add when it is created 
