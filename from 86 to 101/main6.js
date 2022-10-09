/**
 * DOM[events]
 * - use events on HTML
 * - use events on js
 * ---onclick
 * ---oncontextmenu
 * ---onmouseenter
 * ---onmouseleave
 *
 * ---onload
 * ---onscroll
 * ---onresize
 *
 * ---onfocus
 * ---onblur
 * ---onsubmit
 */

let myOnclick = document.getElementById("onclick");

myOnclick.onclick = function () {
  console.log("clicked");
};


let myOncontextmenu = document.getElementById("oncontextmenu");

myOncontextmenu.oncontextmenu = function () {
  console.log("contextmenu");
};

let myOnmouseenter = document.getElementById("onmouseenter");

myOnmouseenter.onmouseenter = function () {
  console.log("mouse entered");
};

let myOnmouseleave = document.getElementById("onmouseleave");

myOnmouseleave.onmouseleave = function () {
  console.log("left");
};

window.onscroll=function () {
          console.log("scroll")
}
window.onresize = function () {
  console.log("resized");
};

window.onload = function () {
  console.log("loaded");
};
let myOnfocus = document.getElementById("onfocus");

myOnfocus.onfocus = function () {
  console.log("focus");
};

let myOnsubmit = document.getElementById("onsubmit");

myOnsubmit.onfocus = function () {
  console.log("submited");
};
