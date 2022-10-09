/**
 * BOM [Browser object model]
 * Session storage .
 * --setItem .
 * --getItem
 * --removeItem
 * --clear .
 * --key .
 *
 *
 * info
 * - new tab= new session
 * - duplicate tab= copy session
 * - new tab with same URL= new session
 */

window.localStorage.setItem("colour", "red");
window.sessionStorage.setItem("colour", "red");

document.querySelector(".name").onblur = function () {
  //console.log("this.value")
  window.localStorage.setItem("input-name", this.value);
  window.sessionStorage.setItem("input-name", this.value);

};
