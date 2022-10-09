/**
 * DOm [check attributes]
 * - Element.attributes
 * - Element.hasAttribute
 * - Element.hasAttributes
 * - Element.removeAttribute
 */

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not found`);
}

if (myP.hasAttributes()) {
  console.log(`has attribute`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`has attributes`);
} else {
  console.log(`has no attributes`);
}
