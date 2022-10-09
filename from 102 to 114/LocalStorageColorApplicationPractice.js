/**
 * BOM [Browser object model]
 * local storage practice
 */

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

//window.localStorage.clear();

if (window.localStorage.getItem("color")){
      //if there is color in the local storage .
      // 1- add color to div
      exp.style.backgroundColor=window.localStorage.getItem("color");
      //2- remove active class from all lis.
      lis.forEach((li)=>{
            li.classList.remove("active");
      })
      //3- add active class to current color.
      document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active"); 
}else{
      //if there is no color in the local storage 
      console.log("No color")
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //console.log(e.currentTarget.dataset.color);
    //remove active class from all lis .
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //add active class to current element .
    e.currentTarget.classList.add("active");
    //add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //change div background color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
